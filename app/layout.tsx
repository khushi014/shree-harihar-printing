import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Harihar Printing Works LLP | Heritage B2B Print & Packaging Solutions",
  description: "A heritage B2B print-pack leader since 1921. 5 generations of precision printing, corporate packaging, mono cartons, Braille cartons, and flexo labels in Ahmedabad.",
  keywords: ["Shree Harihar Printing Works", "Print Pack Ahmedabad", "Mono Cartons Manufacturer", "Braille Cartons", "Industrial Packaging India", "B2B Printing India", "Heidelberg Printing India", "Miroli Plant Ahmedabad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}

