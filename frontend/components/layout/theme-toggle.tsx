"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const btn =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border hover:bg-secondary";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Reserva o espaco do botao antes de montar (evita "pulo" no layout do sidebar)
  if (!mounted) {
    return <span className={btn} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={btn}
      title={isDark ? "Modo dia" : "Modo noite"}
      aria-label={isDark ? "Ativar modo dia" : "Ativar modo noite"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
