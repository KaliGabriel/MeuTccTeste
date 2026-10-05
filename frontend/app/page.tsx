"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Rota raiz "/".
 * Antes: era uma copia da tela de Conversas, renderizada sem Sidebar e sem AuthGuard.
 * Agora: manda o usuario para o painel (se ja tem token) ou para o login.
 * A validacao real do token continua no AuthGuard do (dashboard).
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const hasToken = !!localStorage.getItem("jarvis_token");
    router.replace(hasToken ? "/overview" : "/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
      Carregando...
    </div>
  );
}
