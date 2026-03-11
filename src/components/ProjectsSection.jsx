import sailingloc from "../assets/images/sailingloc.png";
import patinette from "../assets/images/patinette.png";
import salubrite from "../assets/images/salubrite.png";
import blog from "../assets/images/blog-dsp-paris.png";
import { useState } from "react";

export const ProjectsSection = () => {
    const [showMoreStackSailing, setShowMoreStackSailing] = useState(false);
    const [showMoreStackPatinette, setShowMoreStackPatinette] = useState(false);
    const [showMoreStackSalubrite, setShowMoreStackSalubrite] = useState(false);
    const [showMoreStackBlog, setShowMoreStackBlog] = useState(false);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-primary">
                    Projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={sailingloc} 
                                alt="SailingLoc" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                SailingLoc
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                Plateforme web de réservation de bateaux et voiliers entre particuliers. Service de location avec recherche avancée et réservation en ligne.
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    React
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Node.js
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    MongoDB
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Express
                                </span>

                                {showMoreStackSailing && (
                                    <>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            TailwindCSS
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Vite
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            JWT
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Docker
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Firebase Storage
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Vercel
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Render
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Auth
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Swagger
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            API
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Postman
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Jest
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Locust
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Git
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            GitHub
                                        </span>
                                    </>
                                )}
                                                
                                <button
                                    onClick={() => setShowMoreStackSailing(!showMoreStackSailing)}
                                    className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                                >
                                    {showMoreStackSailing ? "-" : "+"}
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <a 
                                    href="./projects/sailingloc" 
                                    className="px-4 py-1 text-sm font-medium rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400 hover:cursor-pointer text-white"
                                >
                                    Détails
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={patinette} 
                                alt="Patinette" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Patinette
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                Projet WordPress avec thème entièrement personnalisé (aucun thème enfant, ni builder)
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    WordPress
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    PHP
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    MySQL
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Symfony
                                </span>

                                {showMoreStackPatinette && (
                                    <>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            JavaScript
                                        </span>
                                         <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                            Google Maps API
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Custom Theme
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            SEO
                                        </span>
                                    </>
                                )}
                                                
                                <button
                                    onClick={() => setShowMoreStackPatinette(!showMoreStackPatinette)}
                                    className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                                >
                                    {showMoreStackPatinette ? "-" : "+"}
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <a 
                                    href="/projects/patinette" 
                                    className="px-4 py-1 text-sm font-medium rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400 hover:cursor-pointer text-white">
                                    Détails
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={salubrite} 
                                alt="Application Salubrité" 
                                className="w-full h-full object-cover object-top" 
                            />
                        </div>
                        
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Application Salubrité
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                Application de gestion et de signalisation d'incidents. Développée pour la mairie de Bobigny avec formulaire complet et suivi des signalements.
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    PHP
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Bootstrap
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Javascript
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    jQuery
                                </span>

                                {showMoreStackSalubrite && (
                                    <>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            HTML
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            CSS
                                        </span>
                                    </>
                                )}
                                                
                                <button
                                    onClick={() => setShowMoreStackSalubrite(!showMoreStackSalubrite)}
                                    className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                                >
                                    {showMoreStackSalubrite ? "-" : "+"}
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <a 
                                    href="/projects/salubrite" 
                                    className="px-4 py-1 text-sm font-medium rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400 hover:cursor-pointer text-white">
                                    Détails
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={blog} 
                                alt="Blog" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Blog
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                Mini-site de blog réalisé en HTML/CSS/JS avec page d'accueil, articles, détails d'articles
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    HTML
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    CSS
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    JavaScript
                                </span>
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                    Responsive
                                </span>

                                {showMoreStackBlog && (
                                    <>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            Bootstrap
                                        </span>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                                            VanillaJS
                                        </span>
                                    </>
                                )}
                                                
                                <button
                                    onClick={() => setShowMoreStackBlog(!showMoreStackBlog)}
                                    className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                                >
                                    {showMoreStackBlog ? "-" : "+"}
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <a 
                                    href="/projects/blog"
                                    className="px-4 py-1 text-sm font-medium rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-400 hover:cursor-pointer text-white">
                                    Détails
                                </a>
                                {/* <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/80 hover:bg-primary/100  dark:bg-primary/60 dark:hover:bg-primary/80 hover:cursor-pointer text-white">
                                    Consulter
                                </span> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};