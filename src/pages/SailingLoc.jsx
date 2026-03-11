import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { SailingLocReview } from "@/components/projects/SailingLocReview";
import { Footer } from "@/components/Footer";

export const SailingLoc = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* {Background Effects} */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main>
                <SailingLocReview />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}