import React from "react";
import "../app/globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../@/components/ui/navigation-menu";
import { Switch } from "../@/components/ui/switch";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>M. Molder | Web Dev</title>
      <body className="px-24">
        <div className="text-slate-500 ml-8 pt-10 text-right">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="mr-4 text-lg">
                  Navigation
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <NavigationMenuLink>
                    <a href="/">
                      <p className="">Home</p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a href="garden">
                      <p className="my-2">Garden</p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a href="droplets">
                      <p className="my-2">Droplets</p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a href="about">
                      <p className="">About</p>
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
                <p className="text-cyan-400 mx-4 inline text-lg">Stream of Consciousness</p>
                <p className="text-cyan-500  hidden">Dark Mode Toggle</p>{" "}
                <Switch className="ml-4 inline" />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
        <div className="p-20 flex flex-col justify-between">
          <p><a href="https://www.linkedin.com/in/mmolder/">LinkedIn </a> | <a href="https://github.com/silly-ursus">GitHub</a> | Mastodon | BlueSky</p>
          <p>© 2024 M. Molder</p>
          <div className="text-right text-slate-400 mr-24">
            <a href="/">
              <p className="inline">Home | </p>
            </a>
            <a href="garden">
              <p className="inline">Garden | </p>
            </a>
            <a href="thoughts">
              <p className="inline">Stream of Consciousness | </p>
            </a>
            <a href="/about">
              <p className="inline">About</p>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
