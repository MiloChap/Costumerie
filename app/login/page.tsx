"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetOk = searchParams.get("reset") === "ok";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      router.push("/gestion");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fbb9b6]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="L'équipe costumes" className="h-24 w-auto" />
        </div>

        {resetOk && (
          <div className="mb-4 rounded-lg bg-[#fbb9b6] border border-[#f04d46] px-4 py-3 text-sm text-[#e21713] text-center">
            Mot de passe mis à jour. Vous pouvez vous connecter.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f04d46]/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f04d46]/40"
            />
          </div>

          {error && <p className="text-[#e21713] text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e21713] text-white py-2 rounded-md text-sm font-medium hover:bg-[#f04d46] disabled:opacity-50 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-slate-500 hover:text-[#e21713] transition"
            >
              Mot de passe oublié ?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
