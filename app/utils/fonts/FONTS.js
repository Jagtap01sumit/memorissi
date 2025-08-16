import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
