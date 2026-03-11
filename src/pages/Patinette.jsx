import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { PatinetteReview } from "@/components/projects/PatinetteReview";
import { Footer } from "@/components/Footer";

export const Patinette = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* {Background Effects} */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main>
                <PatinetteReview />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}