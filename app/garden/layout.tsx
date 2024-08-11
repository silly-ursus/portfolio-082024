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
    <div>{children}</div>
    </>
    )
  }