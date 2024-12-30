import "./globals.css";
import vazirFont from "../constants/localFont"
import {    Footer, Navbar } from "@/components";



const APP_NAME = " اجاره خودرو | شهر خودرو";
const APP_DEFAULT_TITLE = " اجاره خودرو | شهر خودرو";
const APP_TITLE_TEMPLATE = "شهر خودرو";
const APP_DESCRIPTION = "اجاره خودرو با بهترین قیمت";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#1F1F1F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-vazir min-h-screen relative`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
