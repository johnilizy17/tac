import Navbar from "../components/Navbar";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-tac-dark selection:bg-tac-purple selection:text-white pb-20">
            <Navbar />

            <div className="pt-32 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Moments & Events
                    </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                    Explore our journey, team building activities, and professional seminars that define the TAC Group culture.
                </p>

                <GalleryGrid />
            </div>
        </main>
    );
}
