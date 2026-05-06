import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zohaib Ali - Mern Stack Developer",
  description: "Full-stack developer specializing in React, Node.js and MongoDB",
   icons: {
    icon: "https://capsule-render.vercel.app/api?type=venom&height=100&width=100&color=0:000000,100:a371f7&animation=fadeIn&fontAlignY=40&desc=Full%20stack%20Mern%20Developer&descSize=24&descColor=FFFFFF&descAlignY=65",
  },
  openGraph: {
    title: "Zohaib Ali - MERN Stack Developer",
    description: "Full Stack MERN Developer. Building fast, scalable web applications from idea to deployment.",
    url: "https://zohaib-ali.tech",
    siteName: "Zohaib Ali",
    images: [
      {
        url: "https://capsule-render.vercel.app/api?type=venom&height=300&width=1200&color=0:000000,100:a371f7&animation=fadeIn&fontAlignY=40&text=Zohaib%20Ali&fontSize=60&fontColor=FFFFFF&desc=Full%20Stack%20MERN%20Developer&descSize=24&descColor=FFFFFF&descAlignY=65",
        width: 1200,
        height: 300,
        alt: "Zohaib Ali - MERN Stack Developer",
      },
    ],
  },
  keywords: [
    // 1. CORE ROLES
    "Senior Software Engineer",
    "Full Stack Architect",
    "AI/ML Engineer",
    "Data Engineer",
    "LLM Developer",
    "Remote Consultant",

    // 2. BACKEND & ARCHITECTURE
    "System Architecture",
    "Microservices",
    "Scalable Backend Systems",
    "API Design (REST/GraphQL)",
    "Node.js",
    "NestJS",
    "Python",
    "Django",
    "FastAPI",

    // 3. AI, LLM & DATA SCIENCE
    "Large Language Models (LLMs)",
    "Generative AI",
    "LangChain Developer",
    "RAG Pipelines", // Retrieval-Augmented Generation (Huge keyword right now)
    "Data Engineering Pipelines",
    "ETL Automation",
    "Predictive Analytics",

    // 4. FRONTEND
    "Next.js Expert",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Material-UI",
    "Shadcn UI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
