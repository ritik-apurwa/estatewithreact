import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "gradient-light-1": "linear-gradient(180deg, #FFE6E6 0%, #FFE6E6 33%, #E1AFD1 66%, #FFE6E6 100%)",
        "gradient-light-2": "linear-gradient(135deg, #ffd3b6 0%, #ffaaa5 33%, #ff8b94 66%, #f78fb3 100%)",
        "gradient-light-3": "linear-gradient(135deg, #071952 0%, #088395 33%, #37B7C3 66%, #B6C7AA 100%)",
        "gradient-light-4": "linear-gradient(135deg, #667BC6 0%, #FDFFD2 33%, #FFB4C2 66%, #DA7297 100%)",
      }),
      fontFamily: {
        sans: [`var(--font-sora)`, ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
        lato: "var(--font-lato)",
      },
      boxShadow: {
        sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
        md: "0px 4px 8px -2px rgba(11, 10, 55, 0.25)",
        lg: "0px 8px 16px -4px rgba(11, 10, 55, 0.30), 0px 0px 8px -4px rgba(11, 10, 55, 0.10)",
        xl: "0px 16px 32px -8px rgba(11, 10, 55, 0.35), 0px 0px 16px -8px rgba(11, 10, 55, 0.15)",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
