
"use client";

import * as React from "react";
import { Button } from "./button";
import { FlowButton } from "./flow-button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "./navigation-menu";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

function Header() {
    const navigationItems = [
        {
            title: "Solução",
            href: "#solucao",
        },
        {
            title: "Custo-Benefício",
            href: "#comparativo",
        },
        {
            title: "Serviços",
            href: "#servicos",
        },
        {
            title: "Autoridade",
            href: "#prova-social",
        },
    ];

    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (root.classList.contains('dark')) {
            root.classList.remove('dark');
            root.classList.add('light');
            setIsDark(false);
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
            setIsDark(true);
        }
    };

    return (
        <header className="w-full z-[5000] fixed top-0 left-0 bg-background/80 backdrop-blur-md border-b border-border transition-all">
            <div className="max-w-7xl mx-auto px-6 h-20 flex flex-row items-center justify-between">

                {/* Logo & Desktop Nav */}
                <div className="flex items-center gap-10">
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                            {/* Rhombus Icon matching the identity style */}
                            <div className="w-5 h-5 bg-primary-foreground rounded-sm transform rotate-45 shadow-sm"></div>
                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 rounded-xl border border-white/20"></div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-2xl font-black text-foreground tracking-tighter uppercase">AXIS</span>
                            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Gestão Humana</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink
                                            href={item.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent hover:bg-accent/50 transition-colors font-bold text-muted-foreground hover:text-primary"
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    {/* Theme Toggle standardized with the Button component shadow pattern */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all border-border/50 bg-background/50 backdrop-blur-sm"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>

                    <div className="flex items-center">
                        {/* Unique Primary Action Button */}
                        <FlowButton
                            text="Agendar Diagnóstico"
                            size="sm"
                            className="font-black uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            onClick={() => window.open('https://wa.me/5591992026660', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };
