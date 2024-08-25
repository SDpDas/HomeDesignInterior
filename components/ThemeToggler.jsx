'use client'

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Button className="dark:bg-primary hover:dark:bg-primary" 
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0" />
                <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    );
};

export default ThemeToggler; 