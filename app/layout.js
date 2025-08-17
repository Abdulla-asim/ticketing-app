import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Nav from "./(components)/Nav";
import { ThemeProvider } from "./(components)/theme-provider";

import AuthProvider from "@/app/(components)/AuthProvider";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ticketing App",
  description: "A Ticketing App made with NEXT Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
            <div className="flex flex-col h-screen max-h-screen bg-background">
                <Nav />
                <div className="flex-grow overflow-y-auto bg-background text-[var(--default-text)]">
                  {children}
                </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
