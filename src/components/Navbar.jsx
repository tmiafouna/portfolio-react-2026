import {cn} from "@/lib/utils";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact", isContact: true },
]

export const Navbar = ({ isProjectPage = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else if (!storedTheme) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    const handleNavClick = (href, isContact = false) => {
        if (isProjectPage) {
            sessionStorage.setItem('scrollToSection', href);
            sessionStorage.setItem('triggerContactAnimation', 'true'); // Ajoute cet indicateur
            window.location.href = '/';
        } else if (isContact) {
            window.dispatchEvent(new CustomEvent('navigateToContact'));
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="hidden lg:flex text-xl font-bold text-primary items-center z-10" 
                    href={isProjectPage ? "/" : "#hero"}
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("#hero");
                    }}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Timothy </span>{" "}
                        Miafouna
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={isProjectPage ? `/${item.href}` : item.href}
                            onClick={() => handleNavClick(item.href, item.isContact)}
                            className="text-foreground/90 font-medium hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* tablet nav */}
                <div className="hidden sm:flex lg:hidden items-center justify-center space-x-4 flex-1 custom-tablet-nav">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={isProjectPage ? `/${item.href}` : item.href}
                            onClick={() => handleNavClick(item.href, item.isContact)}
                            className="text-foreground/90 font-medium text-sm hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-md bg-gray-300 outline outline-primary/60 dark:bg-gray-900 dark:outline-transparent hover:bg-gray-400 dark:hover:bg-gray-800 dark:hover:outline-1 hover:outline-primary/60 hover:cursor-pointer ml-auto sm:ml-0"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        <Sun className="h-6 w-6 text-white-400" />
                    ) : (
                        <Moon className="h-6 w-6 text-primary" />
                    )}
                </button>
            </div>
        </nav>
    );
};