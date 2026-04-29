import { put } from "@vercel/blob"
import { auth } from "@/auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) return NextResponse.json({ error: "Aucun fichier" }, { status: 400 })

  const blob = await put(`costumes/${Date.now()}-${file.name}`, file, {
    access: "private",
  })

  return NextResponse.json({ url: blob.url })
}