import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nahid Bin Wadood",
  description: "Modern Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/nahid.png"   />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
