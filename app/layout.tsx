import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ReduxProvider from "@/store/ReduxProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopX ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={ inter.className }>
        <ReduxProvider>

          <Navbar />

          <div className="flex w-full flex-1 pt-2 flex-col gap-2 p-2">
            {/* <Banner /> */ }
            { children }
          </div>
          <Footer />
          {/* <Footer /> */ }
        </ReduxProvider>
      </body>
    </html>

  );
}
