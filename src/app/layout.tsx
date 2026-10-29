import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "FORMA Atelier | Thoughtful Interior Design",
  description: "Thoughtfully designed interiors shaped around you. Explore the FORMA Atelier concept portfolio.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
