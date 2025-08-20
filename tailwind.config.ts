import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)", // fundo principal
        foreground: "hsl(var(--foreground) / <alpha-value>)", // textos principais
        secondary: "var(--secondary)", // cor de destaque
        "muted-foreground": "hsl(var(--foreground) / 0.6)", // textos secundários
        accent: "hsl(265, 85%, 42%)", // cor de destaque extra
        border: "hsl(var(--foreground) / 0.2)", // bordas sutis
        "primary-foreground": "#fff", // exemplo de texto sobre secondary
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
