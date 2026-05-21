import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"

class LockedAccountError extends CredentialsSignin {
  constructor(lockedUntil: string) {
    super()
    this.code = `LOCKED:${lockedUntil}`
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // Appel à notre propre API pour éviter Prisma dans l'Edge Runtime
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        })

        if (res.status === 429) {
          const data = await res.json()
          throw new LockedAccountError(data.lockedUntil)
        }

        if (!res.ok) return null
        const user = await res.json()
        return user
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as any).role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role as string
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})