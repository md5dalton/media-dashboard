import Header from "@/components/Header"

import { Inter } from "next/font/google"
import "./globals.css"
import "./App.sass"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Social Media Dashboard",
  description: "Social Media Dashboard with NextJS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />    
        <main>
            {children}
        </main>
      </body>
    </html>
  )
}
