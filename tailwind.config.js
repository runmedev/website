const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-lato)",
          "var(--font-inter)",
          "SF Pro Display",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ["var(--font-jetbrains-mono)"],
        plex: ["var(--font-ibm-plex-mono)"],
        plexSans: ["var(--font-ibm-plex-sans)"],
        slab: ["var(--font-roboto-slab)"],
        pro: "SF Pro Display",
      },
      colors: {
        purpledk: "#000726", // Dark background
        "purple-next-button": "#5B3ADF", // Primary color (bright and vibrant)
        white: "#FFFFFF",
        black: "#000000",
        purpleish: {
          900: "#40289c",
          800: "#492eb2",
          700: "#5233c9",
          600: "#5b39df",
          500: "#6b4de2",
          400: "#7c61e5",
          300: "#8c74e9",
          200: "#9d88ec",
          100: "#fee9ee",
        },
        gray: {
          100: "#f5f5f5", // Light background for light mode
          200: "#e0e0e0", // Borders or subtle text in light mode
          300: "#c2c2c2", // Inactive elements in light mode
          400: "#9e9e9e", // Muted text in light mode
          500: "#757575", // Disabled text in light mode
          600: "#555555", // Secondary text in light mode
          700: "#333333", // Default text in light mode
          800: "#1a1a1a", // Active text in dark mode
          900: "#0d0d0d", // Secondary text in dark mode
        },
        primary: "#6b4de2", // Bright primary color for buttons
        lightPrimary: "#9D88EC", // Lighter version of primary for better contrast
        background: {
          light: "#FFFFFF",
          dark: "#000726",
        },
        text: {
          light: "#000000",
          dark: "#FFFFFF",
          muted: {
            light: "#757575",
            dark: "#B6C6D7",
          },
        },
        buttonBackground: {
          light: "#5B3ADF", // Primary button color in light mode
          dark: "#33334D", // Darker background for flat buttons in dark mode
        },
        buttonText: {
          light: "#FFFFFF", // Light text on buttons in light mode
          dark: "#FFFFFF", // White text on buttons in dark mode
        },
        buttonHoverBackground: {
          light: "#4a2dc1", // Slightly darker hover state in light mode
          dark: "#2a2a3a", // Slightly darker hover state in dark mode for flat buttons
        },
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "dark",
      themes: {
        dark: {
          background: "#000726",
          primary: "#5B3ADF",
          text: "#FFFFFF",
        },
        light: {
          background: "#FFFFFF",
          primary: "#5B3ADF",
          text: "#000000",
        },
      },
      layout: {
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
      },
    }),
  ],
};
