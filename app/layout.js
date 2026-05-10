import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { siteMeta } from "@/data/siteContent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
