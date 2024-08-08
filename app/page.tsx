import React from "react";
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../@/components/ui/navigation-menu"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../@/components/ui/accordion"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../@/components/ui/card"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../@/components/ui/hover-card"
  import { Switch } from "../@/components/ui/switch"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "../@/components/ui/tabs"
  import Image from 'next/image'
  import picImg from "../public/assets/Halftone Illustrations by Oblik Studio/PNG/Biking-3200x2400-colored.png"


export default function Page() {
    return (
        <>
            <div className="text-slate-400 ml-8 pt-10 text-right">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>                        
                        <NavigationMenuTrigger className="mr-4 text-lg">Navigation</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-2">
                            <NavigationMenuLink>
                                <a href="/"><p className="">Home</p></a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <a href="garden"><p className="my-2">Garden</p></a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <a href="thoughts"><p className="">Stream of Consciousness</p></a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <a href="/"><p className="my-2">Anti-Portfolio</p></a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                            <a href="/"><p className="">About</p></a>
                            </NavigationMenuLink>                            
                        </NavigationMenuContent>
                        <p className="text-cyan-400 mx-4 inline text-lg">Now</p>
                        <p className="text-cyan-500  inline">Dark Mode Toggle</p> <Switch className="ml-4 inline" />                        
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="container mx-auto rounded-lg mt-10 mb-20">

                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">M. Molder</h1>
                <p className="inline text-stone-300 mt-10 text-lg animate-pulse">currently hireable!</p>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>
                <p className="text-stone-200 text-xl mt-4 italic inline-block">Welcome to my</p>
                <HoverCard>
                    <HoverCardTrigger className="ml-2 text-cyan-300 underline text-xl">Digital Garden.</HoverCardTrigger>
                    <HoverCardContent>
                        A Digital Garden is a personal space for cultivating ideas.
                    </HoverCardContent>
                </HoverCard>
                <a className="mt-4 block text-cyan-400" href="/">Start Here.
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </a>


                <div className="flex flex-row justify-between">
                    <Card className="bg-transparent border-none max-w-96 mt-10 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-stone-200 text-3xl font-bold">Articles</CardTitle>
                            <CardDescription>Thoughts on things</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-200">Who? What, well you mean like a date? You extol me with a lot of confidence, Doc. My god, they found me. I don't know how but they found me. Run for it, Marty. My god, they found me. I don't know how but they found me. Run for it, Marty. Oh honey, he's teasing you, nobody has two television sets.</p>
                            <p className="text-slate-200">Hey boy, are you alright? Alright, let's set your destination time. This is the exact time you left. I'm gonna send you back at exactly the same time. It's be like you never left. Now, I painted a white line on the street way over there, that's where you start from. I've calculated the distance and wind resistance fresh to active from the moment the lightning strikes, at exactly 7 minutes and 22 seconds. When this alarm goes off you hit the gas. Right about here. I think you got the wrong car, McFly. Marty, don't go this way. Strickland's looking for you. If you're caught it'll be four tardies in a row.</p>
                            <p className="text-slate-200">Marty, I'm sorry, but the only power source capable of generating one point twenty-one gigawatts of electricity is a bolt of lightning. Good morning. Alright, let's set your destination time. This is the exact time you left. I'm gonna send you back at exactly the same time. It's be like you never left. Now, I painted a white line on the street way over there, that's where you start from. I've calculated the distance and wind resistance fresh to active from the moment the lightning strikes, at exactly 7 minutes and 22 seconds. When this alarm goes off you hit the gas. Go. Go. George: you ever think of running for class president?</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-transparent border-none mt-10 shadow-none">
                    <CardHeader>
                        <div className="flex flex-wrap justify-between mb-10">
                            <Image
                            src={picImg}
                            width={250}
                            height={250}
                            className="inline border-x-4 border-b-8 border-t-4 border-slate-100"
                            alt="Picture of the author"
                            />
                            <Image
                            src={picImg}
                            width={250}
                            height={250}
                            className="inline mx-4 border-x-4 border-b-8 border-t-4 border-slate-100"
                            alt="Picture of the author"
                            />
                            <Image
                            src={picImg}
                            width={250}
                            height={250}
                            className="inline border-x-4 border-b-8 border-t-4 border-slate-100"
                            alt="Picture of the author"
                            />
                        </div>
                        <CardTitle className="text-stone-200 text-3xl font-bold shadow-none">Experience</CardTitle>
                        <CardDescription>Where I am, Where I've Been</CardDescription>
                        <p className="text-stone-200 text-xl">Hi, it's really a pleasure to meet you. Pretty Mediocre photographic fakery, they cut off your brother's hair. Oh, just a little weather experiment. I can't believe you loaned me a car, without telling me it had a blindspot. I could've been killed. Doc.</p>
                        <p className="text-stone-200 text-xl">Hey beat it, spook, this don't concern you. Mom, Dad. Um, yeah, I'm on my way. You don't understand. Calvin.</p>
                        <p className="text-stone-200 text-xl mt-4 italic">Yeah, he's right here. Your not gonna be picking a fight, Dad, dad dad daddy-o. You're coming to a rescue, right? Okay, let's go over the plan again. 8:55, where are you gonna be. Oh. Hey, George, buddy, you weren't at school, what have you been doing all day? No.</p>
                    </CardHeader>
                    <CardContent>
                    <p className="text-slate-200 text-2xl font-bold mt-4">Web Development</p>
                    <Accordion type="single" collapsible className="text-stone-300">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1Password</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>The Coding Space</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>The Software Guild</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <p className="text-slate-200 text-2xl font-bold mt-4">Entertainment</p>
                    <Accordion type="single" collapsible className="text-stone-300">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Twin Strangers Productions</AccordionTrigger>
                            <AccordionContent className="text-stone-100">
                            Things I did go here because they're super cool
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Contract & Consulting</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>The Moon Crown</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </CardContent>
                    </Card>
                </div>
                <Card className="bg-transparent mt-4">
                <CardHeader>
                    <CardTitle className="text-stone-200 text-3xl font-bold">Reviews</CardTitle>
                    <CardDescription className="text-slate-200">My thoughts on media</CardDescription>
                </CardHeader>
                <CardContent>
                <Tabs defaultValue="account" className="w-[400px] text-slate-300">
                    <TabsList>
                        <TabsTrigger value="Books">Books</TabsTrigger>
                        <TabsTrigger value="Podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="Movies">Movies</TabsTrigger>
                        <TabsTrigger value="Games">Games</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Books">
                        <ul>
                            <li>Ubik ⭐⭐⭐⭐⭐</li>
                            <li>Neuromancer ⭐⭐⭐⭐</li>
                            <li>The Poisonwood Bible ⭐⭐⭐⭐</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="Podcasts">
                        <ul>
                            <li>Syntax</li>
                            <li>Cryptid Counselor</li>
                            <li>The Supernatural Protection Company</li>
                            <li>Wireland Ranch</li>
                            <li>The Liminal Lands</li>
                            <li>Desert Skies</li>
                            <li>October's Children</li>
                            <li>Where the Leaves Fall Purple</li>
                            <li>Untrue Stories</li>
                            <li>Criminal</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="Movies">
                    <ul>
                        <li>The Matrix ⭐⭐⭐⭐⭐</li>
                        <li>My Neighbor Totoro ⭐⭐⭐⭐⭐</li>
                        <li>Kiki's Delivery Service ⭐⭐⭐⭐⭐</li>
                    </ul>
                    </TabsContent>
                    <TabsContent value="Games">
                    <ul>
                        <li>Bioshock ⭐⭐⭐⭐⭐</li>
                        <li>Omori ⭐⭐⭐⭐</li>
                        <li>Fallout 3 ⭐⭐⭐⭐</li>
                    </ul>
                    </TabsContent>
                </Tabs>
                </CardContent>
                </Card>            
    </div>
        </>
    )
  }