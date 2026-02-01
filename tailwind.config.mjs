/** @type {import('tailwindcss').Config} */
export default {
  // Pastikan ada tanda bintang ganda ** (artinya: termasuk sub-folder)
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Kita definisikan ulang warna kustom di sini
        perhiptani: {
          blue: "#0f284e", // Biru Tua
          green: "#16a34a", // Hijau
          gold: "#d97706", // Emas
          light: "#f1f5f9", // Putih Kebiruan
        },
      },
    },
  },
  plugins: [],
};
