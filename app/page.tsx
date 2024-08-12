import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../@/components/ui/hover-card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs";
import Image from "next/image";
import picImg from "../public/assets/Halftone Illustrations by Oblik Studio/PNG/Biking-3200x2400-colored.png";
import { LinkPreview } from "../@/components/ui/link-preview";

export default function Page() {
  return (
    <>
      <div className="container mx-auto rounded-lg mt-10 mb-20">
        <h1 className="text-stone-100 text-9xl font-bold font-['portia'] sepia inline">
          M. Molder
        </h1>
        <p className="inline text-stone-300 mt-10 text-lg animate-pulse">
          currently hireable!
        </p>
        <p className="text-stone-200 text-2xl">
          Web Developer, sound designer, video game enthusiast, and general
          digital adventurer.
        </p>
        <p className="text-stone-200 text-xl mt-4 italic inline-block">
          Welcome to my
        </p>
        <HoverCard>
          <HoverCardTrigger className="mx-2 text-stone-200 bg-cyan-900 bg-opacity-50 underline text-xl">
            Digital Garden.
          </HoverCardTrigger>
          <HoverCardContent>
            A Digital Garden is a personal space for cultivating ideas.
          </HoverCardContent>
        </HoverCard>
        <p className="text-stone-200 inline-block text-xl">
          Start exploring{" "}
          <a
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-stone-200"
            href="/garden"
          >
            {" "}
            Here.
          </a>
        </p>
        <div className="flex flex-row justify-between">
          <Card className="bg-transparent border-none max-w-96 mt-10 shadow-none">
            <CardHeader>
              <CardTitle className="text-stone-200 text-3xl font-bold">
                Articles
              </CardTitle>
              <CardDescription>Thoughts on things</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-200">blah</p>
              <p className="text-slate-200">blah</p>
              <p className="text-slate-200">blah</p>
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
              <CardTitle className="text-stone-200 text-3xl font-bold shadow-none">
                Experience
              </CardTitle>
              <CardDescription>Where I am, Where I've Been</CardDescription>
              <p className="text-stone-200 text-xl">
                Hi, it's really a pleasure to meet you. Pretty Mediocre
                photographic fakery, they cut off your brother's hair. Oh, just
                a little weather experiment. I can't believe you loaned me a
                car, without telling me it had a blindspot. I could've been
                killed. Doc.
              </p>
              <p className="text-stone-200 dark:text-neutral-400 text-xl">
                I listen to{" "}
              </p>
              <LinkPreview
                url="https://ui.aceternity.com"
                className="inline font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-stone-200"
              >
                {" "}
                this guy{" "}
              </LinkPreview>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <Card className="bg-transparent mt-4">
          <CardHeader>
            <CardTitle className="text-stone-200 text-3xl font-bold">
              Reviews
            </CardTitle>
            <CardDescription className="text-slate-200">
              My thoughts on media
            </CardDescription>
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
  );
}
