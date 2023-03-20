/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        person: "url('/src/Media/BigCardbg/Person.svg')",
        vector: "url('/src/Media/BigCardbg/Vector.svg')",
      },
    },
  },
  plugins: [],
};
