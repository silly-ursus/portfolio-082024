import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport, } from "./navigation-menu";
    import React from "react";
import { Switch } from "./switch";

export const NavCustom = () => (
    <div className="text-slate-500 pt-10 right-0 flex flex-row justify-between">
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br underline from-cyan-400 to-stone-400"><a href="/">🍃</a></p>
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
)