import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "NationBuilders Polytechnic Library Digital Portal", template: "%s | NationBuilders Polytechnic Library" },
  description: "Official digital portal of NationBuilders Polytechnic Library, Asaba: library services, profile and access to academic research databases.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <Header /><main id="main">{children}</main><Footer />
    </body></html>
  );
}
