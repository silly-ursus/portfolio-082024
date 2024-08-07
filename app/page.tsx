import React from "react";

export default function Page() {
    return (
        <>
            <div className="text-right text-slate-400 mr-24 pt-10">
            <p className="inline">Dark Mode Toggle | </p>
            <a href="/"><p className="inline">Home | </p></a>
                <a href="garden"><p className="inline">Garden | </p></a>
                <a href="thoughts"><p className="inline">Stream of Consciousness | </p></a>
                <a href="/"><p className="inline">Anti-Portfolio | </p></a>
                <a href="/"><p className="inline">About</p></a>
                
            </div>
            <div className="container mx-auto rounded-lg mt-16 pt-20">
                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">M. Molder</h1> <p className="inline text-stone-300 mt-10 text-lg animate-pulse">currently hireable!</p>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>                
            </div>
            <div className="container bg-black mx-auto rounded-sm mt-32 p-20 shadow-2xl">
                <h1 className="text-stone-200 text-3xl font-bold">Articles</h1>
                <p className="text-stone-500">Stuff I've written</p>
            </div>
            <div className="container bg-black mx-auto rounded-sm mt-32 p-20 shadow-2xl">
                <h1 className="text-stone-200 text-3xl font-bold">Experience</h1>
                <p className="text-stone-500">Places I've worked</p>
            </div>
            <div className="container bg-black mx-auto rounded-sm my-32 p-20 shadow-2xl">
                <h1 className="text-stone-200 text-3xl font-bold">Reviews</h1>
                <p className="text-stone-500">Stuff I've read</p>
            </div>
        </>
    )
  }