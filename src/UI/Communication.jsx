import React, { useContext } from "react";
import { bioContext } from "../components/Context";

const Communication = () => {
    const { theme } = useContext(bioContext)
    return (
        <div className={` ${theme === "Dark" ? "bg-gradient-to-br from-neutral-600 to-neutral-900" : "bg-gradient-to-br from-yellow-100 to-yellow-50"} text-white min-h-screen flex flex-col items-center justify-center p-6`}>
            {/* Section Title */}
            <h3 className={`${theme === "Dark" ? "text-gray-400" : "text-neutral-600"} text-sm uppercase tracking-widest`}>What We Do</h3>
            <h1 className={`${theme === "Dark" ? "text-white" : "text-neutral-900"} text-3xl sm:text-5xl font-bold text-center mt-2`}>
                Experience the future of seamless
            </h1>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-center text-purple-400">communication with our AI chatbot.</h2>
            <p className={`${theme === "Dark" ? "text-white" : "text-neutral-900"} text-2xl sm:text-2xl font-light text-center mt-4`}>
                Whether it's <span className="font-bold text-gray-400 text-center">custom solutions</span>, AI-powered interactions, or automation.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-5xl w-full">
                <FeatureCard
                    title="Code Generation"
                    description="Welcome to effortless conversations powered by AI. Our chatbot understands context, learns from interactions, and adapts to user preferences."
                    bg="bg-gray-900"
                />
                <FeatureCard
                    title="Unlock the power of AI"
                    description="Welcome to effortless conversations powered by AI. Our chatbot understands context, learns from interactions, and adapts to user preferences."
                    bg="bg-gray-900"
                    image
                />
            </div>
            <div className="relative text-center max-w-4xl mt-20">
                <h1 className={`${theme === "Dark" ? "text-white" : "text-neutral-900"} text-4xl sm:text-6xl font-bold leading-tight`}>
                    AI-driven financial advisory <span className="text-purple-400">services</span>
                </h1>
                <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
                <p className={`${theme === "Dark" ? "text-gray-400" : "text-neutral-600"} text-lg sm:text-xl text-gray-300 mt-4`}>
                    With real-time market analysis and predictive modeling, Gipo assists
                    users in making informed decisions about their investments.
                </p>
                <button className={`mt-6 px-6 py-3 border ${theme === "Dark" ? "border-white hover:bg-white hover:text-black" : "border-neutral-800 text-black hover:text-white  hover:bg-indigo-900"} rounded-lg transition-all`}>
                    Get started
                </button>
            </div>
        </div>
    );
};
const FeatureCard = ({ title, description, bg, image }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-lg relative overflow-hidden`}>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            {image && (
                <div className="absolute bottom-0 right-0 p-6">
                    <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-xl z-10"></div>
                </div>
            )}
        </div>


    );
};

export default Communication;
