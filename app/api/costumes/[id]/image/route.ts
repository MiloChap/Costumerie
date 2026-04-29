import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { get } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const { id } = await params

  const costume = await prisma.costume.findUnique({
    where: { id },
    select: { imageUrl: true },
  })

  if (!costume?.imageUrl) return NextResponse.json({ error: "Pas d'image" }, { status: 404 })

  const result = await get(costume.imageUrl, { access: "private" })
  if (!result) return NextResponse.json({ error: "Image introuvable" }, { status: 404 })

  return new Response(result.stream, {
  headers: {
    "Content-Type": result.blob.contentType ?? "application/octet-stream",
    "Cache-Control": "private, max-age=3600",
    },
  })
}