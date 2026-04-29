import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  console.log("middleware path:", req.nextUrl.pathname)
  console.log("middleware auth:", req.auth)

  const isLoggedIn = !!req.auth
  const isLoginPage = req.nextUrl.pathname === "/login"

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
  if (isAdminRoute && req.auth?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/gestion", req.url))
  }
})

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
}