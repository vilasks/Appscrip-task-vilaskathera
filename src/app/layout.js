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
        <link rel="icon" href="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fe2d200c5c4548a09ba3a9c0e9e6945b-newtonschoollogo.png"/>
        <title>Newton School Vilas Kathera</title> 
        <meta name="description" content="Newton School vilaskathera frontend developer assignment submission." /> 
        <meta name="keywords" content="Newton School, Vilas Kathera, Assignment, Frontend developer assignment" /> 

        <meta property="og:title" content="Newton School Vilas Kathera" />
        <meta property="og:description" content="Newton School vilaskathera frontend developer assignment submission." />
        <meta property="og:image" content="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fe2d200c5c4548a09ba3a9c0e9e6945b-newtonschoollogo.png" /> 
        <meta property="og:url" content="https://my.newtonschool.co/" /> 

        <meta property="twitter:card" content="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fe2d200c5c4548a09ba3a9c0e9e6945b-newtonschoollogo.png" />
        <meta property="twitter:site" content="@vilaskathera" />
        <meta property="twitter:title" content="Newton School Vilas Kathera" />
        <meta property="twitter:description" content="Newton School vilaskathera frontend developer assignment submission" />
        <meta property="twitter:image" content="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fe2d200c5c4548a09ba3a9c0e9e6945b-newtonschoollogo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
