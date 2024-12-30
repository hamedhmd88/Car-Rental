/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // مسیر ذخیره‌سازی فایل‌های PWA
  register: true, // ثبت سرویس‌ورکر
  skipWaiting: true, // فعال‌سازی فوری سرویس‌ورکر جدید
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https", // پروتکل
        hostname: "cdn.imagin.studio", // دامنه مجاز
        port: "", // (اختیاری) شماره پورت
        pathname: "/**", // مسیر فایل‌های تصویری (همه مسیرها)
      },
    ],
  },
};

export default withPWA(nextConfig);
