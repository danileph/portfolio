const { fontFamily } = require("tailwindcss/defaultTheme");

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
      // extend: {
      //   fontFamily: {
      //     primary: ["var(--font-tektur)", ...fontFamily.sans],
      //     secondary: ["var(--font-roboto)", ...fontFamily.mono],
      //   },
      // },
    },
    extend: {
      brightness: {
        30: ".3",
      },
      boxShadow: {
        page: "0px 0px 50px -10px rgba(24, 30, 40, 0.4)",
      },
      scale: {
        115: "1.15",
      },
      fontFamily: {
        tektur: "var(--font-tektur)",
        "roboto-mono": "var(--font-roboto)",
        furore: "var(--font-furore)",
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      backgroundImage: {
        "background-gradient": "var(--background-gradient)",
        "text-gradient": "var(--text-gradient)",
      },
      colors: {
        "my-natural": {
          100: "#FFFFFF",
          300: "#E4E5DC",
          500: "#CBCCC4",
          700: "#51524D",
          720: "#383B40",
          740: "#2B2E30",
          760: "#1F2123",
          800: "#1F2123",
          900: "#17191a",
        },
        "my-primary": {
          100: "",
          300: "",
          500: "#9A37FF",
          700: "",
          900: "",
        },
        "my-secondary": {
          100: "#65E5ED",
          300: "",
          500: "",
          700: "",
          900: "",
        },
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
        "my-rounded": "12px",
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
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
