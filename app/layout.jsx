import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import StarBackground from "@/components/StarsBackground";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
});

export const metadata = {
  title: "Amine Manssouri",
  description: "Amine Manssouri Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition/>
        <PageTransition>
        <StarBackground />
          {children}
        </PageTransition>
        
        </body>
    </html>
  );
}
