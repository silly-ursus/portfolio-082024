import React from "react"
import '../app/globals.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <title>M. Molder | Web Dev</title>
        <body className="bg-zinc-800 bg-gradient-to-t from-slate-500">
            {children}
        <div className="border-t-2 border-cyan-500 p-20 flex flex-col justify-between">
            <p className="text-white">LinkedIn | GitHub | Mastodon | BlueSky</p>
            <p className="text-white">© 2024 M. Molder</p>
            <div className="text-right text-slate-400 mr-24">
                <a href="/"><p className="inline">Home | </p></a>
                <a href="garden"><p className="inline">Garden | </p></a>
                <a href="thoughts"><p className="inline">Stream of Consciousness | </p></a>
                <a href="/"><p className="inline">Anti-Portfolio | </p></a>
                <a href="/"><p className="inline">About</p></a>
            </div>
        </div>
        </body>
      </html>
    )
  }