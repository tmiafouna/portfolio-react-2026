import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
    const scrollToSection = localStorage.getItem('scrollToSection');
    const triggerContactAnimation = localStorage.getItem('triggerContactAnimation');
    
    if (scrollToSection) {
        localStorage.removeItem('scrollToSection');
        setTimeout(() => {
            const element = document.querySelector(scrollToSection);
            element?.scrollIntoView({ behavior: 'smooth' });
            
            if (scrollToSection === '#contact' && triggerContactAnimation === 'true') {
                localStorage.removeItem('triggerContactAnimation');
                window.dispatchEvent(new CustomEvent('navigateToContact'));
            }
        }, 100);
    }
}, []);


    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* {Background Effects} */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection id="contact" />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}