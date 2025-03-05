import { useContext, useEffect, useState } from "react";
import { bioContext } from "../components/Context";

export const Message = () => {
    const words = ["Smart", "Intelligent", "Human-like", "ISEKI", "Fast", "Innovative", "Reliable", "Secure", "AI-Powered", "Advanced", "Personalized", "Seamless"];
    const [offset, setOffset] = useState(0);
    const [visibleWords, setVisibleWords] = useState(7); // Default for md screens

    const { theme } = useContext(bioContext)

    // Detect screen width and update visibleWords
    useEffect(() => {
        const updateVisibleWords = () => {
            setVisibleWords(window.innerWidth < 768 ? 5 : 7);
        };

        updateVisibleWords(); // Run on mount
        window.addEventListener("resize", updateVisibleWords);
        return () => window.removeEventListener("resize", updateVisibleWords);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => (prevOffset + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [visibleWords]);

    return (
        <section className={`flex justify-center items-center w-full ${theme === "Dark" ? "bg-neutral-800" : "bg-yellow-50"} py-10 px-4 text-center`}>
            <div className="relative w-full max-w-7xl">

                {/* Background Gradient */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="md:w-62 md:h-62 bg-gradient-to-r mb-[20rem] from-green-500 to-blue-500 blur-3xl opacity-30"></div>
                </div>

                {/* Title Section */}
                <h1 className={`text-5xl sm:text-7xl md:text-9xl font-extrabold ${theme === "Dark" ? "text-white" : "text-gray-900"} -z-50 `}>
                    Have Any Query
                </h1>
                <h2 className={` text-4xl sm:text-6xl md:text-8xl ${theme === "Dark" ? "text-white" : "text-gray-700"} mt-4 font-bold `}>
                    Send Us <span className="text-yellow-300">Message</span>
                </h2>

                <hr className="mt-7 h-[1px] bg-neutral-700 border-none" />

                {/* Message Box */}
                <div className="relative flex flex-col md:flex-row items-center justify-center rounded-3xl bg-black min-h-[250px] md:min-h-[300px] mt-14 p-6 md:p-10">
                    <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-t from-yellow-700/20 via-transparent to-transparent"></div>

                    <div className="relative flex flex-col md:flex-row items-center gap-6 max-w-md sm:max-w-xl md:max-w-3xl text-white text-center md:text-left">
                        <div className="relative p-5 md:p-6 bg-white text-black font-semibold text-lg shadow-lg border border-gray-300 rounded-full flex items-center justify-center w-28 h-28 md:w-40 md:h-40 animate-pulse">
                            <div className="absolute inset-0 w-full h-full bg-white rounded-full"
                                style={{ clipPath: "path('M50 10 C 75 0, 100 25, 90 50 C 100 75, 75 100, 50 90 C 25 100, 0 75, 10 50 C 0 25, 25 0, 50 10')" }}>
                            </div>
                            <span className="relative z-10 text-sm md:text-lg">↗ Let’s talk</span>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-gray-300">
                            Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetur eiaculis rutrum morbie habitasse orci libero porttitor scelerisque acid vivamus molestie mollise
                        </p>
                    </div>
                </div>

                {/* Scrolling Words Section */}
                <div className={`flex items-center justify-center h-24 md:h-40 mt-12 ${theme === "Dark" ? "bg-neutral-800" : "bg-yellow-50"} overflow-hidden`}>
                    <div className="relative w-full max-w-6xl overflow-hidden">
                        <div
                            className="flex transition-transform duration-2000 ease-in-expo"
                            style={{
                                transform: `translateX(-${offset * (100 / visibleWords)}%)`,
                                width: `${(words.length / visibleWords) * 100}%`,
                            }}
                        >
                            {words.concat(words).map((word, i) => ( // Infinite loop effect
                                <div
                                    key={i}
                                    className="flex-shrink-0 flex items-center uppercase justify-center py-3 md:py-5 text-center text-xl md:text-3xl font-bold text-gray-400"
                                    style={{ width: `${100 / visibleWords}%` }}
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
