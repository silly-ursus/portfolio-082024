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

                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">M. Molder</h1> <p className="inline text-stone-300 mt-10 text-lg animate-pulse">currently hireable!</p>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>
                <p className="text-stone-200 text-xl mt-4 italic">Welcome to my garden.</p>
                <Separator className="mt-20" />                               
                <Card className="bg-transparent border-none">
                <CardHeader>
                    <CardTitle className="text-stone-200 text-3xl font-bold">Articles</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-200">Test</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Separator />
                <Card className="bg-transparent border-none">
                <CardHeader>
                    <CardTitle className="text-stone-200 text-3xl font-bold">Experience</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                <p className="text-slate-200">Places I've worked</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
                
                <Separator />
                <Card className="bg-transparent border-none">
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