

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="pt-40 lg:pt-0 min-h-screen flex items-center justify-center relative"
        >
            <div
                className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Je suis</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Timothy
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Miafouna
                        </span>
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="text-primary relative opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Développeur Web Full Stack
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Je crée des sites web modernes et faciles à utiliser.
                        Je développe des interfaces simples, claires et efficaces.
                        Mon objectif est d’offrir une bonne expérience aux utilisateurs.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#contact" className="cosmic-button">
                            Contactez-moi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}