import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    colors: {
      redFiap: "#ed145b",
      redEsparta: "#d9342c",
      redClose: "#FC5753",
      borderRedClose: "#DF4744",
      yellowMinimize: "#FDBC40",
      borderYellowMinimize: "#DE9F34",
      greenExtend: "#36C84B",
      borderGreenExtend: "#27AA35",
      blueKenzie: "#0001fc",
      greenIFSP: "#76ca3f",
      black: "#000000",
      darkGrey: "#2d3e46",
      white: "#ffffff",
      offWhite: "#f6f6f6",
      whiteSmoke: "#f5f5f5",
      alabaster: "#fafafa",
      lightPeriwinkle: "#e1e2e6",
      cloudyBlue: "#c3c7cb",
      iceBlue: "#e8ebec",
      blueGrey: "#9199a1",
      lightPink: "#f2f2f2",
      lightGrey: "#e3e3e3",
      blackSqueeze: "#f4f8fb",
      greyishBrown: "#4a4a4a",
      greyBrown: "#7b7b7b",
      lightGreyBrown: "#aaaaaa",
      mediumLightPink: "#b9b9b9",
      softGrey: "#bfbfbf",
      mediumGreyBrown: "#a4a4a4",
      scorpionGrey: "#5e5e5e",
      mediumGrey: "#343434",
      lighterGrey: "#565A5B",
      darkBlue: "#163C6E",
      linkWaterBlue: "#d4e5f0",
      coolBlue: "#3aadd1",
      brightSkyBlue: "#32aacf",
      denimBlue: "#39549e",
      duskyBlue: "#486094",
      pictonBlue: "#51cdf3",
      madisonBlue: "#072056",
      limeGreen: "#9ac91c",
      greenishTeal: "#34c7a9",
      turquoise: "#00bfa5",
      leafyGreen: "#9bc731",
      oliveGreen: "#86b31a",
      softGreen: "#6dbc70",
      mustardYellow: "#d9cc18",
      lightYellow: "#f6ed71",
      sunYellow: "#e6da3c",
      pumpkinOrange: "#ef7d00",
      punchRed: "#e04444",
      blurple: "#3f41d1",
      blurpleFocus: "#282a86",
      //organization colors
      organizationPrimary: "#3f41d1",
      organizationPrimaryFocus: "#32348d",
      organizationPrimaryDisabled: "#3f41d14d",
      organizationProgramDefault: "#406afa",
      organizationSecondary: "#072056",
      organizationSecondaryFocus: "#784af4",
      organizationSecondaryTransparent: "#030b1db3",
      organizationSecondaryBorder: "#486094",
      organizationSecondaryLink: "#32aacf",
      organizationSecondaryLinkHover: "#51cdf3",
      organizationSecondaryButton: "#3f41d1",
      organizationSecondaryButtonFocus: "#32348d",
    },
    fontFamily: {
      frutiger: ["Frutiger", "sans-serif"],
      frutigerBold: ["Frutiger-bold", "sans-serif"],
      frutigerSemibold: ["Frutiger-semibold", "sans-serif"],
      frutigerItalic: ["Frutiger-italic", "sans-serif"],
      frutigerLight: ["Frutiger-light", "sans-serif"],
      frutiger45Light: ["Frutiger-45-light", "sans-serif"],
      frutiger55: ["Frutiger-55", "sans-serif"],
      frutiger65Bold: ["Frutiger-65-bold", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "*": {
          boxSizing: "border-box",
          "-moz-box-sizing": "border-box",
          fontFamily: theme("fontFamily.frutiger"),
          fontSize: theme("fontSize.base"),
          margin: "0px",
          padding: "0px",
          border: "none",
        },
        "html, body": {
          height: "100%",
          width: "100%",
          color: theme("colors.black"),
          backgroundColor: theme("colors.alabaster"),
        },
        "ol, ul": {
          listStyle: "none",
        },
        a: {
          textDecoration: "none",
        },
        "input, input:focus, textarea, textarea:focus, button:focus": {
          outline: "none",
        },
        "input::-ms-clear, input::-ms-reveal": {
          display: "none",
          width: "0px",
          height: "0px",
        },
      });
    }),
  ],
};
export default config;
