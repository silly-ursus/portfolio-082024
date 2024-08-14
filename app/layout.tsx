import React from "react";
import "../app/globals.css";
import { NavCustom } from "../@/components/ui/nav-custom";
import { FooterCustom } from "../@/components/ui/footer-custom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>M. Molder | Web Dev</title>
      <body className="px-24">
        <NavCustom/>
        {children}
      <FooterCustom/>
      </body>
    </html>
  );
}
