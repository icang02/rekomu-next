import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';

export const metadata = {
  title: "rekomU",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-opensans">
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
