import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowReviews from "./components/ShowReviews";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  title: "TurfBook | Find & Book Your Turf Easily",
  description: "Book your favorite turfs and connect with teams effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Navbar />
        <ShowReviews />
        {children}
        <Footer />
      </body>
    </html>
  );
}
