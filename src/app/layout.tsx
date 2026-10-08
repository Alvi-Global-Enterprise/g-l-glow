import type { Metadata } from "next";
import { Playfair_Display, Questrial, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "G&L Glow | Beauty · Skin · Fragrance",
  description:
    "Discover carefully selected skincare, beauty and fragrance products designed to be part of your everyday ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${questrial.variable} ${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
