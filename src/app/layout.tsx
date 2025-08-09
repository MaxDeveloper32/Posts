import type { Metadata } from "next";
import "./globals.css";
import '../styles/fonts.css';
import Providers  from "./providers";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Game Posts",
  description: "Posts about games and more",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
