import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const publicPaths = ["/login", "/forgot-password", "/reset-password", "/catalogue", "/mentions-legales"]
  const publicApiPrefixes = ["/api/catalogue", "/api/reservation", "/api/images"]

  const isPublicPage = publicPaths.some(
    (p) => req.nextUrl.pathname === p || req.nextUrl.pathname.startsWith(p + "/")
  )
  const isPublicApi = publicApiPrefixes.some((p) => req.nextUrl.pathname.startsWith(p))

  if (!isLoggedIn && !isPublicPage && !isPublicApi) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
  if (isAdminRoute && req.auth?.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/gestion", req.url))
  }
})

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico)$).*)"],
}