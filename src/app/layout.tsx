import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Providers } from "@/components/shared/Providers";
import "./globals.css";
import { FloatingHomeButton } from "@/components/global/FloatingHomeButton";
export const metadata: Metadata = {
  title: "FitTrack — Push Your Limits",
  description:
    "The premium fitness & wellness platform for athletes who refuse to settle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Providers>
            {" "}
            {children}
            <FloatingHomeButton />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
