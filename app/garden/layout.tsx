import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
    <>
        <div className="text-right text-slate-400 mr-24 pt-10">
            <a href="/"><p className="inline">Home | </p></a>
            <a href="garden"><p className="inline">Garden | </p></a>
            <a href="thoughts"><p className="inline">Stream of Consciousness | </p></a>
            <a href="/"><p className="inline">About</p></a>
        </div>
    <div>{children}</div>
    </>
    )
  }