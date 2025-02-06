import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AppScrip Vilas Kather",
  description: "AppScrip Vilas Kather Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://appscrip-website.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/02/01114342/appscrip-logo.webp"/>
        <title>AppScrip Vilas Kathera</title> 
        <meta name="description" content="AppScrip vilaskathera frontend developer assignment submission." /> 
        <meta name="keywords" content="AppScrip, Vilas Kathera, Assignment, Frontend developer assignment" /> 

        <meta property="og:title" content="AppScrip Vilas Kathera" />
        <meta property="og:description" content="AppScrip vilaskathera frontend developer assignment submission." />
        <meta property="og:image" content="https://appscrip-website.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/02/01114342/appscrip-logo.webp" /> 
        <meta property="og:url" content="https://appscrip.com/" /> 

        <meta property="twitter:card" content="https://appscrip-website.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/02/01114342/appscrip-logo.webp" />
        <meta property="twitter:site" content="@vilaskathera" />
        <meta property="twitter:title" content="AppScrip Vilas Kathera" />
        <meta property="twitter:description" content="AppScrip vilaskathera frontend developer assignment submission" />
        <meta property="twitter:image" content="https://appscrip-website.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/02/01114342/appscrip-logo.webp" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
