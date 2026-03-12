import { StarBackground } from "../StarBackground";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import blog from "../../assets/images/blog-dsp-paris.png";
import { useState, useEffect } from "react";

if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

export const Blog = () => {
    const [showMoreStack, setShowMoreStack] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    const handleReturnToProjects = (e) => {
        e.preventDefault();
        sessionStorage.setItem('scrollToSection', '#projects');
        navigate('/');
    };

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
                        onClick={handleReturnToProjects}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux projets
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Blog
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Blog sur ma passion pour la musique et articles détaillés sur mes projets dans l'audiovisuel.
                    </p>
                    {/* Image principale du projet */}
                    <div className="mb-12">
                        <img 
                            src={blog} 
                            alt="Blog - Vue d'ensemble" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Stack technique */}
                    <div className="mb-12">
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

                            {showMoreStack && (
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
                                onClick={() => setShowMoreStack(!showMoreStack)}
                                className="px-2 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:cursor-pointer transition-colors"
                            >
                                {showMoreStack ? "-" : "+"}
                            </button>
                        </div>
                    </div>

                    {/* Description du projet */}
                    <div className="mb-16">
                        <p className="text-muted-foreground text-left leading-relaxed mb-8">
                            Mini-site consacré à ma passion pour la musique et aux articles détaillés sur mes projets dans l'audiovisuel. Le site résume mon parcours musical et mes expériences au sein de différents projets dans le domaine artistique.
                        </p>
                        <p className="text-muted-foreground text-left leading-relaxed">
                            Conçu en HTML/CSS/JavaScript vanilla pour garantir rapidité et légèreté. Le site présente une page d'accueil avec les articles récents, et des pages dédiées.
                        </p>
                    </div>                
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};