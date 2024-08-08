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
  } from "../../@/components/ui/navigation-menu"
  
  import { Switch } from "../../@/components/ui/switch"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
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
    <div>{children}</div>
    </>
    )
  }