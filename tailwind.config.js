/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,tx,tsx}'
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

