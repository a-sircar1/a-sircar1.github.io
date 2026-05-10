import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { siteMeta } from "@/data/siteContent";
import Script from "next/script";

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
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Script
          src="https://polyfill.io/v3/polyfill.min.js?features=es6"
          strategy="afterInteractive"
        />
        <Script
          id="mathjax-loader"
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
