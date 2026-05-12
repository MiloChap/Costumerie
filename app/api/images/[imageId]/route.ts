import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { get } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ imageId: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const { imageId } = await params

  const image = await prisma.costumeImage.findUnique({
    where: { id: imageId },
    select: { url: true },
  })

  if (!image) return NextResponse.json({ error: "Image introuvable" }, { status: 404 })

  const result = await get(image.url, { access: "private" })
  if (!result) return NextResponse.json({ error: "Image introuvable" }, { status: 404 })

  return new Response(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType ?? "application/octet-stream",
      "Cache-Control": "private, max-age=3600",
    },
  })
}
