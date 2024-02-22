"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Navbar from "./components/Nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store} >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
