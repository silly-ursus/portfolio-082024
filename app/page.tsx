// "use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../@/components/ui/accordion"
  

export default function Page() {
    return (
        <>
            <div className="text-slate-400 ml-24 pt-10">
                <p className="">Dark Mode Toggle</p>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
                {/* Navigation
                    <a href="/"><p className="inline">Home</p></a>
                        <a href="garden"><p className="inline">Garden</p></a>
                        <a href="thoughts"><p className="inline">Stream of Consciousness</p></a>
                        <a href="/"><p className="inline">Anti-Portfolio</p></a>

                        <a href="/"><p className="inline">About</p></a>*/}
            <div className="container mx-auto rounded-lg my-16 pt-20">
                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">M. Molder</h1> <p className="inline text-stone-300 mt-10 text-lg animate-pulse">currently hireable!</p>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>

                <h1 className="text-stone-200 text-3xl font-bold">Articles</h1>
                <p className="text-slate-200">Test</p>
                <h1 className="text-stone-200 text-3xl font-bold">Experience</h1>
                <p className="text-slate-200">Places I've worked</p>
                <h1 className="text-stone-200 text-3xl font-bold">Reviews</h1>
                <p className="text-slate-200">My thoughts on media</p>
                <div className="wrapper mt-4">
                    {/* <Ariakit.TabProvider defaultSelectedId={defaultSelectedId}>
                        <Ariakit.TabList className="tab-list rounded-sm" aria-label="Reviews">
                            <Ariakit.Tab className="tab">
                                Books
                            </Ariakit.Tab>
                            <Ariakit.Tab className="tab" id={defaultSelectedId}>
                                Audio Drama
                            </Ariakit.Tab>
                            <Ariakit.Tab className="tab">
                                Movies
                            </Ariakit.Tab>
                            <Ariakit.Tab className="tab">
                                Games
                            </Ariakit.Tab>
                        </Ariakit.TabList>
                    <Separator orientation="horizontal" className="separator" />
                        <div className="panels">
                            <Ariakit.TabPanel>
                                <ul>
                                    <li>🍎 Ubik</li>
                                    <li>🍇 Neuromancer</li>
                                    <li>🍊 The Poisonwood Bible</li>
                                </ul>
                            </Ariakit.TabPanel>
                            <Ariakit.TabPanel tabId={defaultSelectedId}>
                                <ul>
                                    <li>🥕 Syntax</li>
                                    <li>🧅 Onion</li>
                                    <li>🥔 Potato</li>
                                </ul>
                            </Ariakit.TabPanel>
                            <Ariakit.TabPanel>
                                <ul>
                                    <li>🥩 Beef</li>
                                    <li>🍗 Chicken</li>
                                    <li>🥓 Pork</li>
                                </ul>
                            </Ariakit.TabPanel>
                            <Ariakit.TabPanel>
                                <ul>
                                    <li>🍎 Apple</li>
                                    <li>🍇 Grape</li>
                                    <li>🍊 Orange</li>
                                </ul>
                            </Ariakit.TabPanel>
                        </div>
                    </Ariakit.TabProvider>*/}
    </div>
    </div>
        </>
    )
  }