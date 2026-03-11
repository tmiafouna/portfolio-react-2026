import { ArrowLeft, ExternalLink, Github, Calendar, Users, MapPin, Star, Heart, Shield, Activity } from "lucide-react";
import salubrite from "../../assets/images/salubrite.png";
import salubrite2 from "../../assets/images/salubrite-2.png";
import salubrite3 from "../../assets/images/salubrite-3.png";
import salubrite4 from "../../assets/images/salubrite-4.png";
import mailretour from "../../assets/images/mail_retour.png";
import mairiebobigny from "../../assets/images/mairie-bobigny.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SalubriteReview = () => {
    const [showMoreStack, setShowMoreStack] = useState(false);

    return (
        <div className="bg-background">
            <div className="relative h-96 overflow-hidden">
                <img 
                    src={mairiebobigny} 
                    alt="Application Salubrité" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/30"></div>
                <div className="absolute bottom-8 left-8 right-8">
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
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        Application Salubrité
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Prototype d'application de suivi et gestion de la santé publique
                    </p>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-4 py-12">
                {/* Image principale du projet */}
                <div className="mb-12">
                    <img 
                        src={salubrite} 
                        alt="Application Salubrité - Vue d'ensemble" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Stack technique */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                            PHP
                        </span>
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                            Bootstrap
                        </span>
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                            JavaScript
                        </span>
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer">
                            jQuery
                        </span>

                        {showMoreStack && (
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
                        Application Salubrité est une plateforme complète développée pour les services Salubrité et Communication de la mairie de Bobigny, accompagnée par la DSIT (Direction des systèmes d'informations et des télécommunications). Elle permet aux Balbyniens de signaler facilement les problèmes rencontrés dans la ville et de les rapporter directement au service salubrité pour une gestion optimisée des incidents.
                    </p>
                    <p className="text-muted-foreground text-left leading-relaxed">
                        Ce prototype d'application propose un formulaire complet avec coordonnées du demandeur, menu déroulant des problèmes (nuisibles dangereux, salubrité habitat, lutte contre le bruit, etc.), champ de message détaillé, adresse précise, possibilité d'ajouter photos et documents, et acceptation RGPD.
                    </p>
                </div>

                {/* Conteneur avec image à gauche et texte à droite */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-1 lg:order-1">
                            <img 
                                src={salubrite2} 
                                alt="Tableau de bord" 
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-2 lg:order-2">
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Signalement d'incident</h3>
                            <p className="text-muted-foreground text-left leading-relaxed">
                                Interface de saisie permettant aux utilisateurs de choisir le type de problème parmi une liste déroulante (chiens dangereux, salubrité habitat, lutte contre le bruit, terrains abandonnés, dératisation, etc.), de remplir les coordonnées, l'adresse précise et d'ajouter des photos/documents.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conteneur avec image à droite et texte à gauche */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-1 lg:order-2">
                            <img 
                                src={salubrite3} 
                                alt="Système d'alertes" 
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-2 lg:order-1">
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Coordonnées et localisation</h3>
                            <p className="text-muted-foreground text-left leading-relaxed">
                                Champs de saisie pour les informations essentielles : identité, contact, adresse détaillée avec validation automatique pour assurer la fiabilité des informations transmises.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conteneur avec image à gauche et texte à droite */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-1 lg:order-1">
                            <img 
                                src={salubrite4} 
                                alt="Gestion des campagnes" 
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-2 lg:order-2">
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Détails de l'incident</h3>
                            <p className="text-muted-foreground text-left leading-relaxed">
                                Zone de saisie pour décrire précisément le problème rencontré, son contexte et les informations complémentaires nécessaires au traitement efficace du signalement et validation CAPTCHA.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conteneur avec image à droite et texte à gauche */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="order-1 lg:order-2">
                            <img 
                                src={mailretour} 
                                alt="Système d'alertes" 
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-2 lg:order-1">
                            <h3 className="text-xl font-semibold mb-3 text-foreground">Ticket de retour</h3>
                            <p className="text-muted-foreground text-left leading-relaxed">
                                Une fois le formulaire entièrement rempli, un rapport de dossier est créé et un email de confirmation attestant la bonne réception du ticket est envoyé à l'auteur du signalement.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-muted-foreground text-left leading-relaxed">
                        Après de multiples réunions et échanges avec les services municipaux Salubrité et Communication, Mme Christelle Rodrigues, cheffe de projet au sein de la DSIT à soumis cette proposition en tant que chef de projet afin de déterminer les spécifications et modalités de l'application. J'ai participé à ce projet avec Mme RODRIGUES dans le cadre de mon stage dans le pôle Études et Projets.
                    </p>
                </div>
            </div>
        </div>
    );
};