import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { BlogReview } from "@/components/projects/BlogReview";
import { Footer } from "@/components/Footer";

export const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar isProjectPage={true} />

            {/* Main Content */}
            <main>
                <BlogReview />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
};