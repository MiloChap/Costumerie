"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface FormulaireModalProps {
  children: React.ReactNode
  onClose: () => void
}

export default function FormulaireModal({ children, onClose }: FormulaireModalProps) {
  const [visible, setVisible] = useState(false)

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 150)
  }

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose() }
    window.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
      window.removeEventListener("keydown", handler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-black/70 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div className="flex min-h-full items-start justify-center p-4 py-8">
        <div
          className="relative w-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 text-lg leading-none"
            aria-label="Fermer"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
