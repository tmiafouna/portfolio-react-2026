import { StarBackground } from "../StarBackground";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import sailingloc from "../../assets/images/sailingloc.png";
import sailingloc2 from "../../assets/images/sailingloc-2.png";
import sailingloc3 from "../../assets/images/sailingloc-3.png";
import sailingloc4 from "../../assets/images/sailingloc-4.png";
import sailingloc5 from "../../assets/images/sailingloc-5.png";
import sailingloc6 from "../../assets/images/sailingloc-6.png";
import { useState, useEffect } from "react";

if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

export const SailingLoc = () => {
    const [showMoreStack, setShowMoreStack] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    return (
        <div className="h-auto bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main>
                <div className="container mx-auto max-w-4xl px-4 py-12 pt-40">
                    <Link 
                        to="/#projects" 
                        className="inline-flex items-center text-primary hover:text-primary/80 mb-4 transition-colors font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            sessionStorage.setItem('scrollToSection', '#projects');
                            window.location.href = '/';
                        }}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux projets
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        SailingLoc
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Plateforme web de réservation de bateaux et voiliers entre particuliers
                    </p>
                    {/* Image principale du projet */}
                    <div className="mb-12">
                        <img 
                            src={sailingloc} 
                            alt="SailingLoc - Vue d'ensemble" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Stack technique */}
                    <div className="mb-12">
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

                            {showMoreStack && (
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
                                onClick={() => setShowMoreStack(!showMoreStack)}
                                className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                            >
                                {showMoreStack ? "-" : "+"}
                            </button>
                        </div>
                    </div>

                    {/* Description du projet */}
                    <div className="mb-16">
                        <p className="text-muted-foreground text-left leading-relaxed mb-4">
                            SailingLoc est une plateforme innovante de location de bateaux entre particuliers. Elle permet aux propriétaires de publier des annonces détaillées et aux utilisateurs de rechercher, réserver et payer en ligne en toute sécurité. L'interface principale offre une expérience fluide pour créer un compte, choisir ses dates, sélectionner le lieu du bateau et découvrir les coups de cœur de la communauté.
                        </p>
                        <p className="text-muted-foreground text-left leading-relaxed">
                            Le projet comporte des espaces dédiés aux propriétaires, locataires et administrateurs pour gérer les annonces, disponibilités, réservations et validations. L'architecture moderne combine React (Vite) pour le frontend, Node.js/Express pour le backend, MongoDB pour la base de données, avec conteneurisation Docker et déploiements sur Vercel/Render. Le stockage des fichiers est assuré via Firebase Storage. La documentation API est gérée avec Swagger, les tests sont réalisés avec Postman et Jest, et les tests de charge avec Locust.
                        </p>
                    </div>
                    
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-1">
                                <img 
                                    src={sailingloc2} 
                                    alt="Interface de réservation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-2">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Page d'accueil</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Interface moderne et responsive pour créer un compte, choisir ses dates et lieux, et naviguer facilement entre les bateaux disponibles. Les filtres avancés et les coups de cœur de la communauté aident à trouver la location parfaite.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-2">
                                <img 
                                    src={sailingloc3} 
                                    alt="Système de réservation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-1">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Interface de recherche</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Écran de recherche et réservation avec messagerie intégrée (parcours utilisateur). Performance optimisée, accessibilité garantie et feedback en temps réel pour guider l'utilisateur à chaque étape du processus.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-1">
                                <img 
                                    src={sailingloc4} 
                                    alt="Interface de réservation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-2">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Liste des bateaux</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Page répertoriant tous les bateaux disponibles avec leurs caractéristiques principales. Possibilité d'ajouter les bateaux en favoris, système de tri par prix et nombre de personnes, et barre de recherche pour trouver un bateau via son nom.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-2">
                                <img 
                                    src={sailingloc5} 
                                    alt="Système de réservation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-1">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Réservation d'un bateau</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Un système de réservation en temps réel avec calendrier interactif, 
                                    paiement sécurisé et confirmation instantanée. Les propriétaires peuvent 
                                    gérer leurs disponibilités et communiquer directement avec les locataires.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-1">
                                <img 
                                    src={sailingloc6} 
                                    alt="Interface de réservation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-2">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Espace Propriétaire</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Tableau de bord de gestion pour les propriétaires avec ajout, modification et suppression de bateaux. Gestion du calendrier, visualisation des réservations et suivi des revenus générés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};