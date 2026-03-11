import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { SailingLocReview } from "@/components/projects/SailingLocReview";
import { Footer } from "@/components/Footer";

export const SailingLoc = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            {/* {Background Effects} */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main className="flex-grow">
                <SailingLocReview />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}