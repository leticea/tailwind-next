import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },
      maxWidth: {
        app: "700px",
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        violet: {
          25: "#fcfaff",
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUpAndFade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },

      animation: {
        slideDownAndFade: "slideDownAndFade 1s linear",
        slideUpAndFade: "slideUpAndFade 1s linear",
      },
    },
  },
  plugins: [],
};
export default config;
