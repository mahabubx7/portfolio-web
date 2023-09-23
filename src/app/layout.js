import "./globals.css";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Mahabub | Full-Stack Developer",
  description: "A passionate Full-Stack Developer based in 📌Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
