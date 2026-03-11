import { Github, Linkedin, Mail, Send, ArrowRight } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
            to_name: 'Timothy Miafouna'
        };

        emailjs.send(
            'service_sfhd4ql',
            'template_hegfwhg',
            templateParams,
            'ipf7q4l8YD0HX-K3Y'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setShowNotification(true);
            setNotificationMessage('Message envoyé avec succès !');
            e.target.reset();
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000); // 3 secondes
        })
        .catch((error) => {
            console.log('FAILED...', error);
            setShowNotification(true);
            setNotificationMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000); // 3 secondes
        });
    };

    useEffect(() => {
        const handleContactNavigation = () => {
            console.log('Événement navigateToContact reçu');
            
            // Ajoute la classe d'animation aux liens sociaux
            const socialLinks = document.querySelectorAll('.social-link');
            console.log('Liens sociaux trouvés:', socialLinks.length);
            
            socialLinks.forEach(link => {
                link.classList.add('animate-color-pulse');
                console.log('Classe ajoutée à:', link);
            });
            
            // Écoute les itérations d'animation
            let count = 0;
            const handleAnimationIteration = (e) => {
                count++;
                console.log('Itération:', count);
                if (count >= 5) {
                    e.target.classList.remove('animate-color-pulse');
                    e.target.removeEventListener('animationiteration', handleAnimationIteration);
                }
            };
            
            setTimeout(() => {
                socialLinks.forEach(link => {
                    link.addEventListener('animationiteration', handleAnimationIteration);
                });
            }, 100);
        };
        
        window.addEventListener('navigateToContact', handleContactNavigation);
        
        return () => {
            window.removeEventListener('navigateToContact', handleContactNavigation);
        };
    }, []);

    return (
        <>
            <section 
                id="contact" 
                className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-primary">
                        Contact
                    </h2>
                    <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Une idée, un projet, une collaboration ? Je suis à votre disposition, ouvert à nouvelles opportunités.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Me contacter</h3>
                            <div className="space-y-4">
                                <a 
                                    href="https://wa.me/33631733928" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <BsWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h4 className="font-medium text-foreground text-lg sm:text-xl">WhatsApp</h4>
                                            <p className="text-muted-foreground text-sm sm:text-lg">06-31-73-39-28</p>
                                        </div>
                                    </div>
                                </a>

                                <a 
                                    href="mailto:t.miafouna@outlook.fr"
                                    className="group flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h4 className="font-medium text-foreground text-lg sm:text-xl">Email</h4>
                                            <p className="text-muted-foreground text-sm sm:text-lg">t.miafouna@outlook.fr</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-medium mb-4">Réseaux</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a 
                                        href="https://www.linkedin.com/in/timothy-miafouna/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`social-link p-3 rounded-full bg-card shadow-sm border-2 border-primary hover:shadow-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-muted-foreground hover:text-primary ${triggerAnimation ? 'animate-color-pulse' : ''}`}
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a 
                                        href="https://github.com/tmiafouna" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`social-link p-3 rounded-full bg-card shadow-sm border-2 border-primary hover:shadow-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-muted-foreground hover:text-primary ${triggerAnimation ? 'animate-color-pulse' : ''}`}
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
                            <div className="bg-card p-8 rounded-lg shadow-sm">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label 
                                            htmlFor="name" 
                                            className="block text-sm font-medium mb-2 text-left">
                                            Nom
                                        </label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            required 
                                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="Entrez votre nom" />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="email" 
                                            className="block text-sm font-medium mb-2 text-left">
                                            Email
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            required 
                                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="Entrez votre email" />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="message" 
                                            className="block text-sm font-medium mb-2 text-left">
                                            Message
                                        </label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            required 
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                            placeholder="Entrez votre message" 
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                                    >
                                        Envoyer le message
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {showNotification && (
                <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out z-50">
                    <div className="flex items-center gap-2">
                        <Send size={16} />
                        <span>{notificationMessage}</span>
                    </div>
                </div>
            )}
        </>
    );
};