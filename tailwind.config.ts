import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";
import { light } from "@mui/material/styles/createPalette";


//base colors 
const baseColors=[
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

//shade mapping for the dark and light mode toggle
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

//function to generate color themes for light and dark modes
const generateThemeObject=(colors: any, mapping: any, invert=false)=>{
  const theme : any = {};
  baseColors.forEach((color)=>{
    theme[color]={};
  
    Object.entries(mapping).forEach(([key, value]: any)=>{
      const shadeKey= invert ? value : key;
      theme[color][key]=colors[color][shadeKey];
    })
  });
  return theme;
}

//light themed colors
const lightTheme= generateThemeObject(colors, shadeMapping);

//dark themed colors
const darkTheme= generateThemeObject(colors, shadeMapping, true);


const themes={
  light:{
    ...lightTheme,
    white:"#ffffff"
  },
  dark:{
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"]
  }
}

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [createThemes(themes)],
} satisfies Config;
