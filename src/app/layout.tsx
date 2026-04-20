import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ATRIVM UFMS | Espaço Interdisciplinar de Estudos da Antiguidade",
    template: "%s | ATRIVM UFMS",
  },
  description:
    "Laboratório de Estudos Interdisciplinares e Grupo de Pesquisa ATRIVM, vinculado à UFMS/FACH. Arqueologia, Numismática, Humanidades Digitais e Estudos da Antiguidade.",
  keywords: [
    "ATRIVM",
    "UFMS",
    "Antiguidade",
    "Numismática",
    "Arqueologia",
    "Humanidades Digitais",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
