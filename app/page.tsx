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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../@/components/ui/card"
  import { Switch } from "../@/components/ui/switch"
  import { Separator } from "../@/components/ui/separator"

export default function Page() {
    return (
        <>
            <div className="text-slate-400 ml-8 pt-10">
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
                        <p className="mx-4 inline text-lg">Now</p>
                        <p className="inline">Dark Mode Toggle</p> <Switch className="ml-4 inline" />                        
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="container mx-auto rounded-lg mt-10 mb-20">

                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">M. Molder</h1>
                <p className="inline text-stone-300 mt-10 text-lg animate-pulse">currently hireable!</p>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>
                <p className="text-stone-200 text-xl mt-4 italic inline-block">Welcome to my garden.</p><a className="ml-4 inline-block text-pink-400" href="/">Start Here.</a>
                <div className="flex flex-row justify-between">
                    <Card className="bg-transparent border-none max-w-96 mt-10">
                        <CardHeader>
                            <CardTitle className="text-stone-200 text-3xl font-bold">Articles</CardTitle>
                            <CardDescription>Thoughts on things</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-200">Who? What, well you mean like a date? You extol me with a lot of confidence, Doc. My god, they found me. I don't know how but they found me. Run for it, Marty. My god, they found me. I don't know how but they found me. Run for it, Marty. Oh honey, he's teasing you, nobody has two television sets.</p>
                            <p className="text-slate-200">Hey boy, are you alright? Alright, let's set your destination time. This is the exact time you left. I'm gonna send you back at exactly the same time. It's be like you never left. Now, I painted a white line on the street way over there, that's where you start from. I've calculated the distance and wind resistance fresh to active from the moment the lightning strikes, at exactly 7 minutes and 22 seconds. When this alarm goes off you hit the gas. Right about here. I think you got the wrong car, McFly. Marty, don't go this way. Strickland's looking for you. If you're caught it'll be four tardies in a row.</p>
                            <p className="text-slate-200">Marty, I'm sorry, but the only power source capable of generating one point twenty-one gigawatts of electricity is a bolt of lightning. Good morning. Alright, let's set your destination time. This is the exact time you left. I'm gonna send you back at exactly the same time. It's be like you never left. Now, I painted a white line on the street way over there, that's where you start from. I've calculated the distance and wind resistance fresh to active from the moment the lightning strikes, at exactly 7 minutes and 22 seconds. When this alarm goes off you hit the gas. Go. Go. George: you ever think of running for class president?</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card className="bg-transparent mt-10">
                    <CardHeader>
                        <CardTitle className="text-stone-200 text-3xl font-bold">Experience</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <p className="text-stone-200 text-xl">Hi, it's really a pleasure to meet you. Pretty Mediocre photographic fakery, they cut off your brother's hair. Oh, just a little weather experiment. I can't believe you loaned me a car, without telling me it had a blindspot. I could've been killed. Doc.</p>
                        <p className="text-stone-200 text-xl">Hey beat it, spook, this don't concern you. Mom, Dad. Um, yeah, I'm on my way. You don't understand. Calvin.</p>

<p className="text-stone-200 text-xl mt-4 italic">Yeah, he's right here. Your not gonna be picking a fight, Dad, dad dad daddy-o. You're coming to a rescue, right? Okay, let's go over the plan again. 8:55, where are you gonna be. Oh. Hey, George, buddy, you weren't at school, what have you been doing all day? No.</p>
                    </CardHeader>
                    <CardContent>
                    <p className="text-slate-200">Places I've worked</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                    </Card>
                </div>
                <Card className="bg-transparent mt-4">
                <CardHeader>
                    <CardTitle className="text-stone-200 text-3xl font-bold">Reviews</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-200">My thoughts on media</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
                </Card>
                
                <div className="wrapper mt-4">
                    {/* Books
                        Audio Drama
                        Movies
                        Games
                    
                        <li>🍎 Ubik</li>
                        <li>🍇 Neuromancer</li>
                        <li>🍊 The Poisonwood Bible</li>
                        
                        <li>🥕 Syntax</li>
                        <li>🧅 Onion</li>
                        <li>🥔 Potato</li>

                        <li>🥩 Beef</li>
                        <li>🍗 Chicken</li>
                        <li>🥓 Pork</li>

                        <li>🍎 Apple</li>
                        <li>🍇 Grape</li>
                        <li>🍊 Orange</li>*/}
                </div>
    </div>
        </>
    )
  }