import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "@/components/aside/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Discord Clone",
    description: "A project made to copy Discord's design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Aside />
                {children}
            </body>
        </html>
    );
}
