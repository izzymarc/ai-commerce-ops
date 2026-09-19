import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Commerce Ops",
  description: "Demo AI-powered commerce operations dashboard prototype with mock data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
