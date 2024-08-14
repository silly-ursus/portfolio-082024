import React from "react";
import "../app/globals.css";
import {NavCustom} from "../@/components/ui/nav-custom";

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
        <div className="p-20 flex flex-col justify-between">
          <p><a href="https://www.linkedin.com/in/mmolder/">LinkedIn </a> | <a href="https://github.com/silly-ursus">GitHub</a> | Mastodon | BlueSky</p>
          <p>© 2024 M. Molder</p>
          <div className="text-right text-slate-400 mr-24">
            <a href="/">
              <p className="inline">Home | </p>
            </a>
            <a href="garden">
              <p className="inline">Garden | </p>
            </a>
            <a href="thoughts">
              <p className="inline">Stream of Consciousness | </p>
            </a>
            <a href="/about">
              <p className="inline">About</p>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
