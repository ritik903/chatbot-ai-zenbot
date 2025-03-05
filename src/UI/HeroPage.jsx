import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { bioContext } from "../components/Context";
import { FaArrowUp } from "react-icons/fa";

export const HeroPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(bioContext)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight + 10) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <div className={`relative flex justify-center items-center w-full ${theme === "Dark" ? "bg-black" : "bg-yellow-50"} md:pt-30 md:pb-10 py-20`}>
            {/* Overlay Gradient Effect */}
            <div className="absolute  inset-0 flex justify-center items-center pointer-events-none">
                <div className="md:w-72 md:h-72 bg-gradient-to-r from-red-500 to-yellow-500 blur-3xl opacity-30"></div>
            </div>

            {/* Hero Content */}
            <section className="flex flex-col lg:grid lg:grid-cols-2 place-content-center gap-10 px-5 lg:px-16 relative z-10 items-center">
                {/* Left Text Section */}
                <div className="md:order-0 mt-10 lg:mt-20 text-center lg:text-left ">
                    <p className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-3xl md:text-4xl`}>Intelligent Solution</p>
                    <h1 className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-5xl md:text-6xl lg:text-7xl font-bold flex justify-center lg:justify-start items-center`}>
                        Innovative<span><img src="/image/chatbot.png" alt="" className="h-14 w-14 md:h-20 md:w-20" /></span>
                    </h1>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl">
                        <span className="text-yellow-300 font-bold">AI</span> <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"}`}>Solutions</span>
                    </h2>

                    {/* Explore Button */}
                    <div className="flex justify-center lg:justify-start">
                        <NavLink to="/chatbot" className="mt-7">
                            <button className="text-black font-bold text-lg md:text-xl cursor-pointer rounded-full px-6 py-3 bg-yellow-300 hover:bg-yellow-400 transition">
                                Explore Now
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center ">
                    <figure>
                        <img
                            src="/image/robo2.png"
                            alt="AI Robot"
                            className=" h-64 w-64 md:h-80 md:w-80 lg:h-[37rem] lg:w-[37rem] rounded-full border-2 border-transparent animate-border-glow"
                        />
                    </figure>
                </div>
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-5 cursor-pointer right-5 h-10 w-10 bg-blue-600 text-white rounded-full shadow-lg transition-opacity flex items-center justify-center ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <FaArrowUp size={16} />
                </button>
            </section>
        </div>
    );
};
