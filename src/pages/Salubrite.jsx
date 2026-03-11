import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { SalubriteReview } from "@/components/projects/SalubriteReview";
import { Footer } from "@/components/Footer";

export const Salubrite = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            {/* {Background Effects} */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main className="flex-grow">
                <SalubriteReview />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}