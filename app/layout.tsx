import type { Metadata } from "next";
import "@styles/globals.css";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Share Prompts",
  description: "Share & Discover AI Prompts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
}
