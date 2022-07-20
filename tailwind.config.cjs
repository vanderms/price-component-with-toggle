/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        [ "neutral-50" ]: "var(--neutral-50)",
        [ "neutral-200" ]: "var(--neutral-200)",
        [ "neutral-500" ]: "var(--neutral-500)",
        [ "neutral-800" ]: "var(--neutral-800)",
        [ "primary" ]: "var(--primary)",
        [ "gradient" ]: "var(--gradient)",
        [ 'neutral-500-semi-translucid' ]: "var(--neutral-500-semi-translucid)"
      }

    },
  },
  plugins: [],
}