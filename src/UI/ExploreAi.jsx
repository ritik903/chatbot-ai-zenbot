import { useContext, useEffect, useState } from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { bioContext } from "../components/Context";

export const ExploreAi = () => {
    const [count, setCount] = useState(0);

    const {theme} = useContext(bioContext)

    useEffect(() => {
        let startValue = 0;
        let endValue = 236; // Final number
        let duration = 2000; // Animation duration (ms)
        let stepTime = duration / endValue; // Time per step

        let counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);

            if (startValue >= endValue) {
                clearInterval(counter); // Stop animation
            }
        }, stepTime);

        return () => clearInterval(counter); // Cleanup on unmount
    }, []);

    return (
        <div className={`relative grid place-content-center py-10 w-full ${theme === "Dark" ? "bg-black" : "bg-yellow-50"}`}>

            {/* Gradient Backgrounds */}
            <div className="absolute md:top-10 md:right-10 top-10 right-30 md:w-42 md:h-42  bg-gradient-to-br from-yellow-500 to-black opacity-50 md:blur-[100px] blur-[80px]"></div>
            <div className="absolute bottom-30 left-10 md:w-42 md:h-42  bg-gradient-to-tl from-green-400 to-black opacity-30 md:blur-[100px] blur-[80px]"></div>

            {/* Heading */}
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight text-center ${theme === "Dark" ? "text-white" : "text-gray-900"}`}>
                Explore The AI Power & Our <br />
                <span className="text-yellow-300">Innovative</span> Solutions
            </h1>

            {/* Main Section */}
            <div className="relative max-w-7xl text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-10 mt-10 place-items-center">

                {/* Buttons Section */}
                <div className="mt-1 order-2 md:order-1 p-6 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <p className="w-60 text-center py-4 px-6 rounded-full text-2xl border border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-950 transition">
                        Our Mission
                    </p>
                    <p className="w-60 text-center py-4 px-6 rounded-full text-2xl bg-yellow-300 text-black hover:bg-yellow-500 transition">
                        Our Vision
                    </p>
                    <p className="w-60 text-center py-4 px-6 rounded-full text-2xl border border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-950 transition">
                        Key Features
                    </p>
                </div>

                {/* Text Section */}
                <div className="flex order-1 md:order-2 flex-col text-center md:text-left px-6">
                    <p className={` ${theme === "Dark" ? "text-gray-300" : "text-gray-700"} `}>
                        Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis
                        rutrum morbie habitasse orci libero porttitor molestie mollise.
                    </p>

                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-yellow-300">✔</span>
                            <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} font-semibold`}>Real-World Transformations</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-yellow-300">✔</span>
                            <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} font-semibold`}>Innovative AI Solutions</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-yellow-300">✔</span>
                            <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} font-semibold`}>Bot Brains, Business Boosters</span>
                        </li>
                    </ul>

                    <button className="mt-6 md:px-6 md:py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition btn">
                        Explore Now →
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex order-3 justify-center w-full">
                    <img
                        src="/image/robo.jpg"
                        alt="AI Robot"
                        className="w-full max-w-md md:max-w-none h-auto rounded-3xl shadow-lg fullimg"
                    />
                </div>
            </div>

            {/* Counter Section */}
            <div className="flex  md:flex-row justify-center md:justify-between items-center md:gap-8 gap-5 text-amber-50 mt-20 w-full px-6">

                {/* Counter Item */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                    <span className="text-4xl md:text-7xl text-yellow-300"><GiTechnoHeart /></span>
                    <div className="flex flex-col border-l-2 border-neutral-700 px-4 text-center md:text-left">
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-3xl md:text-6xl`}>{count}</span>
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-xs md:text-2xl mt-2`}>Finished Projects</span>
                    </div>
                </div>

                {/* Counter Item */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                    <span className="text-4xl md:text-7xl text-yellow-300"><GiTechnoHeart /></span>
                    <div className="flex flex-col border-l-2 border-neutral-700 px-4 text-center md:text-left">
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-3xl md:text-6xl`}>{count}</span>
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-xs md:text-2xl mt-2`}>Finished Projects</span>
                    </div>
                </div>

                {/* Counter Item */}
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                    <span className="text-4xl md:text-7xl text-yellow-300"><GiTechnoHeart /></span>
                    <div className="flex flex-col border-l-2 border-neutral-700 px-4 text-center md:text-left">
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-3xl md:text-6xl`}>{count}</span>
                        <span className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-xs md:text-2xl mt-2`}>Finished Projects</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
