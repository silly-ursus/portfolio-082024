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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../@/components/ui/accordion";

export default function Page() {
  return (
    <>
      <div className="container mx-auto rounded-lg mt-10 mb-20">
        <h1 className=" text-9xl font-bold font-['portia'] inline">
          M. Molder
        </h1>
        <p className="inline  mt-10 text-lg animate-pulse">
          currently hireable!
        </p>
        <p className=" text-2xl">
          Web Developer, sound designer, video game enthusiast, and general
          digital adventurer.
        </p>
        <p className=" text-xl mt-4 italic inline-block">
          Welcome to my
        </p>
        <HoverCard>
          <HoverCardTrigger className="mx-2  bg-cyan-100 bg-opacity-50 text-xl">
            Digital Garden.
          </HoverCardTrigger>
          <HoverCardContent>
            A Digital Garden is a personal space for cultivating ideas.
          </HoverCardContent>
        </HoverCard>
        <p className=" inline-block text-xl">
          Start exploring{" "}
          <a
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br underline from-cyan-400 to-stone-400"
            href="/garden"
          >
            {" "}
            here.
          </a>
        </p>
        <div className="flex flex-row justify-between">
          <Card className="bg-transparent border-none mt-10 shadow-none">
          <CardHeader>
              <CardTitle className=" text-3xl font-bold shadow-none">
                Work
              </CardTitle>
              <CardDescription>Where I am, Where I've Been</CardDescription>
              <p className=" text-xl">
                I work as a Full Stack Developer, having started my career in teaching before moving into the wild world of start-ups. I'm passionate about accessibility, personal security on the web, and education.
              </p>
            </CardHeader>
            <CardContent>
              <p className=" text-2xl font-bold mt-4">
                Web Development
              </p>
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                  <AccordionTrigger>1Password</AccordionTrigger>
                  <AccordionContent>
                    <p className="italic underline">
                      March 2019 - October 2023
                    </p>
                    <p className="mt-4">
                      After my experience with teaching, I was ready to dive
                      back into hands-on programming. I joined 1Password in
                      March 2019 as their 128th employee. While working on the
                      web team, I helped maintain and later migrate an SSG Hugo
                      website to an SSR React, Next, and Netlify site (the
                      latter stack being what this very site uses as well!)
                      There were several subdomains to maintain the code for,
                      such as the 1Password Blog and their Support site, along
                      with other internal repositories that helped keep things
                      running.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>The Coding Space</AccordionTrigger>
                  <AccordionContent>January 2019 - March 2019</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>The Software Guild</AccordionTrigger>
                  <AccordionContent>May 2018 - January 2019</AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className=" text-2xl font-bold mt-4">
                Entertainment
              </p>
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Twin Strangers Productions
                  </AccordionTrigger>
                  <AccordionContent className="">
                    March 2023 - Present
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Contract & Consulting</AccordionTrigger>
                  <AccordionContent>December 2022 - Present</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>The Moon Crown</AccordionTrigger>
                  <AccordionContent>May 2022 - Present</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-transparent mt-4">
          <CardHeader>
            <CardTitle className=" text-3xl font-bold">
              Reviews
            </CardTitle>
            <CardDescription className="">
              My thoughts on media
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="Books">Books</TabsTrigger>
                <TabsTrigger value="Podcasts">Podcasts</TabsTrigger>
                <TabsTrigger value="Movies">Movies</TabsTrigger>
                <TabsTrigger value="Games">Games</TabsTrigger>
              </TabsList>
              <TabsContent value="Books">
                <ul>
                  <li>Ubik</li>
                  <li>Neuromancer</li>
                  <li>The Poisonwood Bible</li>
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
                  <li>The Matrix</li>
                  <li>My Neighbor Totoro</li>
                  <li>Kiki's Delivery Service</li>
                </ul>
              </TabsContent>
              <TabsContent value="Games">
                <ul>
                  <li>Bioshock</li>
                  <li>Omori</li>
                  <li>Fallout 3</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
