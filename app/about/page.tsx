import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";

export default function Page() {
  return (
    <>
      <div className="container mx-auto rounded-lg mt-10">
        <h1 className="text-9xl font-bold font-['portia'] inline">
          M. Molder
        </h1>
        <p className="text-2xl">
          Web Developer, sound designer, video game enthusiast, and general
          digital adventurer.
        </p>
        <div className="flex flex-row justify-between">
          <Card className="bg-transparent border-none mt-10 shadow-none">
            <CardHeader>
              <CardTitle className="text-3xl font-bold shadow-none">
                About
              </CardTitle>
              <CardDescription>The person behind the keyboard</CardDescription>
              <p className="text-xl">
              Since you're here, you probably want to know a little bit about me. I'm a Full Stack Engineer working in Web Development. I'm all about making sure I help my team out however I can, but in my time away from work, I'm your quintessential nerd.
              </p>
              <p className="text-xl">
              Video games, creating video games, programming, anime, plain old tv (With a surname like mine, you'd better believe I grew up on X-Files). I'm majorly into all of it. I'm even a bit of a music geek. Aside from that, I'm big on crafts and like to sew and draw when I'm not in front of a screen.
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mt-4">
                Hobbies
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Film & Animation
                  </AccordionTrigger>
                  <AccordionContent>
                    March 2023 - Present
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Sound Design</AccordionTrigger>
                  <AccordionContent>December 2022 - Present</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Gaming</AccordionTrigger>
                  <AccordionContent>May 2022 - Present</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Handwork</AccordionTrigger>
                  <AccordionContent>May 2022 - Present</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
