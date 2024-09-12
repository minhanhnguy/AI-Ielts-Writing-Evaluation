"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

var ifDark = true;

export function ModeToggle() {
  const { setTheme } = useTheme();

  function darkOrLight() {
    if (ifDark) {
      console.log(ifDark);
      ifDark = false;
      setTheme("light");
    } else {
      console.log(ifDark);
      ifDark = true;
      setTheme("dark");
    }
  }

  return (
    <div className="fixed top-2 right-3">
      <Button variant="outline" size="icon" onClick={darkOrLight}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
