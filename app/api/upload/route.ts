import { auth } from "@/auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Non autorisé" }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) return NextResponse.json({ error: "Aucun fichier" }, { status: 400 })

  const base = process.env.VPS_IMAGE_BASE
  const token = process.env.VPS_TOKEN
  if (!base || !token) {
    return NextResponse.json({ error: "Configuration serveur manquante" }, { status: 500 })
  }

  // On transfère le fichier au service d'upload du VPS, qui le ré-encode en WebP
  const vpsForm = new FormData()
  vpsForm.append("file", file, file.name)

  const res = await fetch(`${base}/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: vpsForm,
  })

  if (!res.ok) {
    return NextResponse.json({ error: "Échec de l'upload de l'image" }, { status: 502 })
  }

  const data = (await res.json()) as { url: string }
  return NextResponse.json({ url: data.url })
}
