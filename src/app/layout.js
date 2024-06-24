import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar></Navbar>
          <div className="min-h-screen">{children}</div>
          <Footer></Footer>
        </body>
      </AuthProvider>
    </html>
  );
}
