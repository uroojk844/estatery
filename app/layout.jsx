import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import NewsLetter from "./component/NewsLetter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digilabs",
  description: "Digilabs front end interview assignment",
  author: "Urooj Khan",
};

export default function RootLayout({ children }) {
  return (
    <html theme="winter" lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
