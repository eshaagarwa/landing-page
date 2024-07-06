/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "homeaccrediancom-nero": "#fff",
        darkslategray: {
          "100": "#4b4b4b",
          "200": "#3c4852",
          "300": "rgba(3, 86, 66, 0.03)",
        },
        "homeaccrediancom-royal-blue": "#1a73e8",
        royalblue: {
          "100": "rgba(26, 115, 232, 0.35)",
          "200": "rgba(26, 115, 232, 0.11)",
        },
        dimgray: "#737373",
        gray: {
          "100": "rgba(0, 0, 0, 0.22)",
          "200": "rgba(0, 0, 0, 0.87)",
        },
        "homeaccrediancom-mirage": "#1a202c",
        "homeaccrediancom-mystic": "#e2e8f0",
        dodgerblue: "#3b82f6",
        whitesmoke: "#f5f5f5",
        darkslateblue: "#1350a0",
        aliceblue: {
          "100": "#eef5ff",
          "200": "rgba(235, 243, 255, 0.35)",
        },
        "homeaccrediancom-mine-shaft": "#282828",
        "homeaccrediancom-japanese-laurel": "#007bff",
        black: "#000",
        "homeaccrediancom-royal-blue-15": "rgba(26, 115, 232, 0.15)",
        "homeaccrediancom-mine-shaft1": "#262626",
        "homeaccrediancom-gull-gray-20": "rgba(148, 163, 184, 0.2)",
      },
      spacing: {},
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        "homeaccrediancom-roboto-bold-17": "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "6xs": "7px",
        sm: "14px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "6xl": "25px",
      "base-7": "16.7px",
      "base-9": "16.9px",
      mid: "17px",
      "8xl-7": "27.7px",
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "mini-8": "14.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
