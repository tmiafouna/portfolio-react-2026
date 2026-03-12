import { StarBackground } from "../StarBackground";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
// import bannierepatinette from "../../assets/images/banniere-patinette.png";
import patinette from "../../assets/images/patinette.png";
import patinette2 from "../../assets/images/patinette-2.png";
import patinette3 from "../../assets/images/patinette-3.png";
import { useState, useEffect } from "react";

if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

export const Patinette = () => {
    const [showMoreStack, setShowMoreStack] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    return (
        <div className="h-auto bg-background text-foreground overflow-x-hidden">
            {/* {Background Effects} */}
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
                        Patinette
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Site WordPress de location de trottinettes électriques avec thème personnalisé
                    </p>
                    {/* Image principale du projet */}
                    <div className="mb-12">
                        <img 
                            src={patinette} 
                            alt="Patinette - Vue d'ensemble" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Stack technique */}
                    <div className="mb-12">
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

                            {showMoreStack && (
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
                                onClick={() => setShowMoreStack(!showMoreStack)}
                                className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                            >
                                {showMoreStack ? "-" : "+"}
                            </button>
                        </div>
                    </div>

                    <div className="mb-16">
                        <p className="text-muted-foreground text-left leading-relaxed">
                            Projet d'un site WordPress avec thème entièrement sur mesure pour un service de trottinettes en libre-service situé à Lyon. Aucun thème enfant ou page builder n'a été utilisé dans la réalisation de ce projet.
                        </p>
                    </div>

                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-1">
                                <img 
                                    src={patinette2} 
                                    alt="Interface mobile" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-2">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Service de location</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Le service d'opérateur de trotinettes propose 2000 trottinettes électriques accessible en continu à Lyon. Les utilisateurs peuvent déverrouiller les trotinettes via QR code et les louer au tarif horaire de 1€, sans engagement d'abonnement requis. - Image : cartographie repertoriant les trotinettes à disposition via géolocalisation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-1 lg:order-2">
                                <img 
                                    src={patinette3} 
                                    alt="Géolocalisation" 
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-2 lg:order-1">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Détails du service</h3>
                                <p className="text-muted-foreground text-left leading-relaxed">
                                    Des systèmes d'alarme et capteurs protègent chaque trottinette contre les utilisations frauduleuses. La recharge est assurée par un réseau de bénévoles qui récupèrent les véhicules entre 21h et 6h pour les recharger chez eux.
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