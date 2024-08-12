import React from "react";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../@/components/ui/card"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../@/components/ui/accordion"


export default function Page() {
    return (
        <>
            <div className="container mx-auto rounded-lg mt-10 mb-20">
                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">About</h1>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>
                <div className="flex flex-row justify-between">
                <Card className="bg-transparent border-none mt-10 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-stone-200 text-3xl font-bold shadow-none">Experience</CardTitle>
                        <CardDescription>Where I am, Where I've Been</CardDescription>
                        <p className="text-stone-200 text-xl">Hi, it's really a pleasure to meet you. Pretty Mediocre photographic fakery, they cut off your brother's hair. Oh, just a little weather experiment. I can't believe you loaned me a car, without telling me it had a blindspot. I could've been killed. Doc.</p>
                    </CardHeader>
                    <CardContent>
                    <p className="text-slate-200 text-2xl font-bold mt-4">Web Development</p>
                    <Accordion type="single" collapsible className="text-stone-300">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1Password</AccordionTrigger>
                            <AccordionContent>
                                <p className="italic underline">March 2019 - October 2023</p>
                                <p className="mt-4">After my experience with teaching, I was ready to dive back into hands-on programming.
                                    I joined 1Password in March 2019 as their 128th employee. While working on the web team, 
                                    I helped maintain and later migrate an SSG Hugo website to an SSR React, Next, and Netlify site (the latter stack being what this very site uses as well!)
                                    There were several subdomains to maintain the code for, such as the 1Password Blog and their Support site, along with other internal repositories that helped keep things running.
                                    </p>

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>The Coding Space</AccordionTrigger>
                            <AccordionContent>
                                January 2019 - March 2019
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>The Software Guild</AccordionTrigger>
                            <AccordionContent>
                                May 2018 - January 2019
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <p className="text-slate-200 text-2xl font-bold mt-4">Entertainment</p>
                    <Accordion type="single" collapsible className="text-stone-300">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Twin Strangers Productions</AccordionTrigger>
                            <AccordionContent className="text-stone-100">
                                March 2023 - Present
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Contract & Consulting</AccordionTrigger>
                            <AccordionContent>
                                December 2022 - Present
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>The Moon Crown</AccordionTrigger>
                            <AccordionContent>
                                May 2022 - Present
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </CardContent>
                    </Card>
                </div>      
    </div>
        </>
    )
  }