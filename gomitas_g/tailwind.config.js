/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        'nasa-black': "#171616", 
        'nasa-white': "#DDDDDD", 
      },
    }, 
    fontSize: {
      'h1': '61.04px', 
      'h2': '48.83px',
      'h3': '39.06px', 
      'h4': '31.25px', 
      'h5': '25px', 
      'h6': '20px',  
      'p': '16px',  
      'small-1': '12.8px', 
      'small-2': '10.24px',   
    } 
  },
  darkMode: "class", 
  plugins: [nextui()],
};
