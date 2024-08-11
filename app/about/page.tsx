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
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../../@/components/ui/hover-card"

  import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"
  import Image from 'next/image'


export default function Page() {
    return (
        <>
            <div className="container mx-auto rounded-lg mt-10 mb-20">
                <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">About</h1>
                <p className="text-stone-200 text-2xl">Web Developer, sound designer, video game enthusiast, and general digital adventurer.</p>
                <p className="text-stone-200 text-xl mt-4 italic inline-block">Welcome to my</p>
                <HoverCard>
                    <HoverCardTrigger className="ml-2 text-cyan-300 underline text-xl">Digital Garden.</HoverCardTrigger>
                    <HoverCardContent>
                        A Digital Garden is a personal space for cultivating ideas.
                    </HoverCardContent>
                </HoverCard>
                <a className="mt-4 block text-cyan-400" href="/">Start Here.
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
                </div>      
    </div>
        </>
    )
  }