import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediCare Plus | Multi-Speciality Healthcare",
  description:
    "Professional healthcare services, experienced specialists, advanced diagnostics, and patient-focused care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-slate-900 antialiased">
        {/* Background Blur Effects */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-100/30 blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}