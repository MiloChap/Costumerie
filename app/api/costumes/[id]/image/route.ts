import { auth } from "@/auth"
import { prisma } from "@/lib/db"
import { get } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const { id } = await params

  const firstImage = await prisma.costumeImage.findFirst({
    where: { costumeId: id },
    orderBy: { ordre: "asc" },
    select: { url: true },
  })

  if (!firstImage) return NextResponse.json({ error: "Pas d'image" }, { status: 404 })

  // Image déjà migrée vers le VPS : on redirige
  const base = process.env.VPS_IMAGE_BASE
  if (base && firstImage.url.startsWith(base)) {
    return NextResponse.redirect(firstImage.url, 307)
  }

  // Sinon : ancien comportement Blob (le temps de la migration)
  const result = await get(firstImage.url, { access: "private" })
  if (!result) return NextResponse.json({ error: "Image introuvable" }, { status: 404 })

  return new Response(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType ?? "application/octet-stream",
      "Cache-Control": "private, max-age=3600",
    },
  })
}
