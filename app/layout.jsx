"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import NewsLetter from "./component/NewsLetter";
import { DetailsStore } from "@/store/details_store";
import { collection, getDocs } from "firebase/firestore";
import db from "@/lib/firebase";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Digilabs",
//   description: "Digilabs front end interview assignment",
//   author: "Urooj Khan",
// };

export default function RootLayout({ children }) {
  const [detail, setDetail] = useState([]);

  const details = collection(db, "digilab");
  const getDetails = async () => {
    const snapshot = await getDocs(details);

    snapshot.forEach((doc) => {
      setDetail([{ id: doc.id, ...doc.data() }]);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <html theme="winter" lang="en">
      <body className={`${inter.className}`}>
        <DetailsStore.Provider value={detail}>
          <NavBar />
          {children}
          <NewsLetter />
          <Footer />
        </DetailsStore.Provider>
      </body>
    </html>
  );
}
