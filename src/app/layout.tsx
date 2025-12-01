import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AnimatedBackground } from '@/components/landing/animated-background';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Code Canvas | MERN Stack Developer Portfolio',
  description: 'Portfolio of a 5-year experienced MERN stack software engineer. Specializing in React, Node.js, and creating beautiful, functional web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased relative")}>
        <AnimatedBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
