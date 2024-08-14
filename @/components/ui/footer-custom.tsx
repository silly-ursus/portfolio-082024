import React from "react";

export const FooterCustom = () => (
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
)