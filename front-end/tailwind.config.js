/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        64: "64px",
      },
      padding: {
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
      },
      fontSize: {
        "display-1": "64px",
        "display-2": "56px",
        h1: "44px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
        h7: "20px",
        "body-xl": "20px",
        "body-lg": "18px",
        "body-md": "16px",
        "body-sm": "14px",
        "caption-lg": "14px",
        "caption-md": "12px",
        "caption-sm": "10px",
        "button-lg": "16px",
        "button-sm": "14px",
        "overline-lg": "16px",
        "overline-sm": "12px",
      },
      lineHeight: {
        120: "120%",
        140: "140%",
        180: "180%",
        24: "24px",
      },
      boxShadow: {
        "drop-2": "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        "drop-4": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "drop-6": "0px 6px 6px 0px rgba(0, 0, 0, 0.25)",
        "drop-8": "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        "drop-12": "0px 12px 12px 0px rgba(0, 0, 0, 0.25)",
        "drop-16": "0px 16px 16px 0px rgba(0, 0, 0, 0.25)",
        grid: "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
        card: " 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10), 0px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 24px 14px 0px rgba(0, 0, 0, 0.05), 0px 42px 17px 0px rgba(0, 0, 0, 0.01), 0px 66px 18px 0px rgba(0, 0, 0, 0.00)",
      },
      colors: {
        primary: "#417F56",
        white: "#ffffff",
        black: "#0C0C0C",
        gold: "#f4b740",

        error: "#C30000",
        "error-light": "#ED2E2E",
        "error-extralight": "#FFF2F2",

        success: "#00966D",
        "success-light": "#00BA88",
        "success-extralight": "#F3FDFA",

        warning: "#A9791C",
        "warning-light": "#F4B740",
        "warning-extralight": "#FFF8E1",

        tint: {
          1: "#E5F2E9",
          2: "#CAE4D3",
          3: "#B0D7BD",
          4: "#96C9A7",
          5: "#7CBC91",
          6: "#61AE7B",
          7: "#4E9968",
        },
        shade: {
          1: "#396F4B",
          2: "#315F41",
          3: "#294F36",
          4: "#21402B",
          5: "#183020",
          6: "#102016",
          7: "#08100B",
        },
        gray: {
          1: "#F9F9F9",
          2: "#E1E1E1",
          3: "#EDEDED",
          4: "#CBCBCB",
          5: "#ADADAD",
          6: "#757575",
          7: "#717171",
          8: "#353535",
        },
        TransitionEvent: {
          
        }
      },
      animation: {
        "move-right": "move-right 3s linear infinite",
        "move-left": "move-left 3s linear infinite",
      },
      keyframes: {
        "move-right": {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "move-left": {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
