import type { Metadata } from "next";
import {Inter, Poppins } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight:["500","600","900"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cm-conversor-vercel.app'),
  title: 'Conversor de Moedas em Tempo Real | Cotações Hoje',
  description: 'Converta Dólar, Euro, Real e outras moedas instantaneamente com taxas de mercado atualizadas em tempo real. Gratuito e rápido.',
  keywords: ['conversor de moedas', 'cotacao dolar hoje', 'converter euro para real', 'cambio real time'],
  authors: [{ name: 'Pedro Honorato', url: 'https://github.com/pedrohbhrj' }],
  openGraph:{
    title: 'Conversor de Moedas em Tempo Real',
    description: 'Converta moedas instantaneamente com taxas atualizadas.',
    url: 'https://cm-conversor-vercel.app',
    siteName: 'Meu Conversor',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview do Conversor de Moedas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`overflow-y-hidden ${fontInter.variable} ${fontPoppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
