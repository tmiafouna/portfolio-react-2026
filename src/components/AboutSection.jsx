import { Code, Globe, Database, BarChart3, Film, FolderOpen } from "lucide-react";
import timothy from '../assets/images/timothy.jpg';
import dsp from '../assets/images/dsp.jpeg';
import cv from '../assets/CV_2026_Timothy_MIAFOUNA.pdf';
 
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    À propos de <span className="text-primary"> moi</span>
                </h2>
                <div className="space-y-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="about-img relative w-64 h-64 mx-auto flex items-center justify-center m-10">
                            <img 
                                src={timothy} 
                                alt="Timothy Miafouna" 
                                className="w-[60%] h-[60%] object-cover rounded-full"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
                            <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover text-center">
                                <img src={dsp} alt="Digital School of Paris" className="rounded-md w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
                                <h5 className="font-semibold text-sm">Formation</h5>
                                <p className="text-xs text-muted-foreground">Master 2</p>
                            </div>
                            <div className="gradient-border backdrop-blur transition-all duration-300 will-change-transform ring-1 ring-primary/15 hover:ring-2 hover:ring-primary/40 hover:scale-[1.015] p-4 sm:p-6 card-hover text-center">
                                <FolderOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 sm:mb-3" />
                                <h5 className="font-semibold text-sm">Projets</h5>
                                <p className="text-xs text-muted-foreground">+10 réalisations</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold pt-10">Développeur Web Passionné et Polyvalent</h3>
                            <p className="text-muted-foreground text-justify about-paragraph">
                                {" "}
                            Actuellement en <span className="font-bold">Master 2 </span> <span className="text-primary font-bold">Data Engineer</span>, j'ai commencé mon parcours avec un <span className="font-bold">BTS SIO spécialité SLAM</span>. J'ai ensuite poursuivi avec un <span className="font-bold">Bachelor Consultant Développeur Web et Mobile</span>. Ces formations m'ont permis d'acquérir de <span className="text-primary font-bold">solides bases en programmation</span>.
                            </p>
                            <p className="text-muted-foreground text-justify about-paragraph">
                                Je me spécialise dans le <span className="text-primary font-bold">développement front-end</span> avec des technologies comme <span className="text-primary font-bold">React</span>, <span className="text-primary font-bold">Angular</span> et <span className="text-primary font-bold">TailwindCSS</span>. Je crée des <span className="font-bold">interfaces modernes et responsives</span> qui offrent une <span className="font-bold">excellente expérience utilisateur</span>.
                            </p>
                            <p className="text-muted-foreground text-justify about-paragraph">
                                Je développe également des <span className="font-bold">compétences en</span> <span className="text-primary font-bold">back-end</span>, notamment pour la <span className="text-primary font-bold"> logique métier et la création de fonctionnalités</span>. Je travaille avec des technologies comme <span className="text-primary font-bold">Node.js</span>, <span className="text-primary font-bold">Express </span> et <span className="text-primary font-bold"> MongoDB</span> pour <span className="font-bold">construire des </span> <span className="font-bold"> applications complètes et fonctionnelles</span>.
                            </p>
                            <p className="text-muted-foreground text-justify about-paragraph">
                                En parallèle, je suis passionné par la <span className="text-primary font-bold">musique</span>, <span className="text-primary font-bold"> l'audiovisuel et le jeu vidéo</span>. Je compose avec des <span className="font-bold">outils tels que </span> <span className="text-primary font-bold">FL Studio </span> et <span className="text-primary font-bold">Reason </span> et je m'intéresse à la <span className="font-bold">création 3D avec</span> <span className="text-primary font-bold"> Blender </span> et au <span className="font-bold">développement de jeu vidéo avec </span> <span className="text-primary font-bold">Unreal Engine</span>. Ces projets me permettent de <span className="font-bold">mêler créativité et technologie</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Contactez-moi
                                </a>
                                <a 
                                    href={cv} 
                                    download="CV_2026_Timothy_MIAFOUNA.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    {" "}
                                    Lien CV
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 pt-10">
                            <div className="gradient-border p-6 card-hover mt-25 md:mt-0">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 ml-0.5 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg mobile-break"> 
                                            <span className="desktop-text">Développement web et mobile</span>
                                            <span className="mobile-line-1">Développe-</span>
                                            <span className="mobile-line-2">ment web et mobile</span>
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Création de sites et d'applications modernes avec HTML, CSS et JavaScript. Interfaces adaptées à tous les écrans.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover md:mt-0">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Globe className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg mobile-break"> 
                                            <span className="desktop-text">Sites et thèmes WordPress</span>
                                            <span className="mobile-line-1">Sites</span>
                                            <span className="mobile-line-2">et thèmes</span>
                                            <span className="mobile-line-3">WordPress</span>
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Création et personnalisation de sites avec WordPress. Mise en place de thèmes simples et efficaces.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Database className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Gestion de base de données</h4>
                                        <p className="text-muted-foreground pr-3">
                                            Conception et gestion de bases de données. Organisation et manipulation des données pour les applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <BarChart3 className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Analyse de données</h4>
                                        <p className="text-muted-foreground pr-3">
                                            Découverte et analyse de données dans le cadre de mon mastère Data Engineer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Film className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Audiovisuel et Jeu Vidéo</h4>
                                        <p className="text-muted-foreground pr-6">
                                            Création musicale, audiovisuelle et développement de jeux vidéo avec des outils comme FL Studio, Reason, Filmora, Blender et Unreal Engine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}