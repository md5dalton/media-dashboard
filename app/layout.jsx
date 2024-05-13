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
        <html lang="en" className={`${inter.className}`}>
            <body className="
            px-6 pb-20 mx-auto max-w-[1110px] md:p-0
            text-very-dark-blue dark:text-white dark:bg-very-dark-blue
            ">
            <Header />    
            <main>
                {children}
            </main>
            </body>
        </html>
    )
}
