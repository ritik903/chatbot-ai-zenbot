import React, { useContext } from "react";
import { bioContext } from "../components/Context";
import { NavLink } from "react-router-dom";

const Technology = () => {
    const { theme } = useContext(bioContext)
    return (
        <div className={`relative flex items-center justify-center h-screen ${theme === "Dark" ? "bg-black text-white" : "bg-yellow-50 text-neutral-950"}  `}>
            {/* Background gradient with animated planets */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-50 left-30 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-50 right-90 w-15 h-15 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-purple-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Content */}
            <div className="relative text-center px-6 md:px-12 lg:px-20">
                <h5 className={`text-sm uppercase ${theme === "Dark" ? "text-gray-400" : "text-neutral-600"}  tracking-widest`}>Powerful Solution</h5>
                <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                    Talk to Tomorrow’s <br />
                    <span className="text-purple-400 relative inline-block">
                        Technology
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-purple-400"></span>
                    </span>
                </h1>
                <p className={`mt-4 ${theme === "Dark" ? "text-gray-400" : "text-neutral-600"} max-w-xl mx-auto`}>
                    Experience the future of seamless communication with our <span className={` ${theme === "Dark" ? "text-yellow-300" : "text-blue-950"}`}>voice AI chatbot.</span> 
                </p>
                <NavLink to="/jarvis"><button className={`mt-6 px-6 py-3 border ${theme === "Dark" ? "border-white hover:bg-white text-white" : "border-neutral-800 text-black hover:text-white  hover:bg-indigo-900"}  rounded-lg  hover:text-black transition`}>
                    Get started
                </button></NavLink>
            </div>
        </div>
    );
};

export default Technology;
