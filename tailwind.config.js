/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark-mode based on user’s OS setting
  darkMode: 'media', 

  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // You can add custom colors, spacing, etc. here if desired
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      borderRadius: {
        xl: 'var(--rounded)',
      },
    },
  },

  plugins: [
    // If you add more Tailwind plugins, list them here
  ],
};