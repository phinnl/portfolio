import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhinNL - Web Developer",
  description:
    "PhinNL - Web Developer. A passionate and driven web developer with experience in building scalable and interactive web applications using modern web technologies like React, Next.js and TypeScript. Skilled in designing and implementing responsive and visually appealing user interfaces, and delivering high-quality web experiences that meet user needs and expectations. Passionate about learning and staying up-to-date with the latest web technologies and best practices.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-black/95 text-white")}>
        {children}
      </body>
    </html>
  );
}
