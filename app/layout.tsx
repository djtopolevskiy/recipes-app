import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const jetbrain = localFont({
  src: [
    {
      path: './font/JBM/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/JBM/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'bolt',
    },
    {
      path: './font/JBM/JetBrainsMono-Medium.woff2',
      weight: '500',
      style: 'medium',
    },    
  ],
})

export const metadata: Metadata = {
  title: "Рецепти з Інтернету",
  description: "Рецепти з Інтернету",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col items-center w-full min-h-full bg-[#F0E7DE]">
      <body className={jetbrain.className}>{children}</body>
    </html>
  );
}
