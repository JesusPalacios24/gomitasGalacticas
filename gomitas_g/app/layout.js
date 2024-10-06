import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/ui/Navbar";
import StarsAnimation from "./components/ui/StarsAnimation";
import Footer from "./components/ui/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1c1b1d]`}
      >
        <StarsAnimation></StarsAnimation>
        <div className="z-30 relative">
        <Navbar></Navbar>
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
