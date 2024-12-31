import LocalFont from "next/font/local";
const vazirFont = LocalFont({
  src: [
    // {
    //   path: "/Public/fonts/IRANYekanWebLight.woff2",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: "/Public/fonts/IRANYekanWebMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/Public/fonts/IRANYekanWebRegular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/Public/fonts/IRANYekanWebBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/Public/fonts/IRANYekanWebBlack.woff2",
      weight: "800",
      style: "normal",
    },
    
    {
      path: "/Public/fonts/IRANYekanWebExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  style: "normal",
  display: "block",
});

export default vazirFont;