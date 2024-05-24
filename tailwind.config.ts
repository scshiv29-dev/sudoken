import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "21": "repeat(21, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
  prefix: "",
  daisyui: {
    themes: ["forest", "cupcake"],
    styled: true,
  },
} satisfies Config;

export default config;
