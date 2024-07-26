import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "ph-sm": "360px", // Small smartphones
        "ph-md": "375px", // Medium smartphones
        "ph-lg": "414px", // Large smartphones
        "ph-xl": "480px", // Extra-large smartphones
        "tb-sm": "600px", // Small tablets
        "tb-md": "768px", // Medium tablets
        "tb-lg": "1024px", // Large tablets
        "lt-sm": "1366px", // Small laptops
        "lt-md": "1440px", // Medium laptops
        "lt-lg": "1600px", // Large laptops
        "dt-st": "1920px", // Standard desktops
        "dt-he": "2560px", // High-end desktops
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
