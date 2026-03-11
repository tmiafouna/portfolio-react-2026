

export const Footer = () => {
    return (
        <footer 
            className="py-10 px-4 bg-card relative mt-12">
            <div className="container mx-auto max-w-5xl h-full flex justify-center items-center">
                <p className="text-foreground/70 font-medium">
                    
                    &copy; {new Date().getFullYear()} - Timothy Miafouna. Tous droits réservés.
                </p>
            </div>
        </footer>
        
    )
}
