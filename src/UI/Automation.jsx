import { useContext, useEffect, useState } from "react";
import { bioContext } from "../components/Context";
import infoData from "../api/Automation.json"

export const Automation = () => {
    const [data, setData] = useState([])
    const { theme } = useContext(bioContext)
    const [expandedCardId, setExpandedCardId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedCardId((prevId) => (prevId === id ? null : id));
    };


    useEffect(() => {
        setData(infoData)
    }, [])


    return (
        <div className={`relative grid place-content-center w-full min-h-screen py-10 px-4 md:px-10 ${theme === "Dark" ? "bg-neutral-800" : "bg-yellow-50"}`}>
            {/* Background Glow Effect */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="md:w-62 md:h-62 bg-gradient-to-r mb-[20rem] from-green-500 to-blue-500 blur-3xl opacity-30"></div>
            </div>

            {/* Heading */}
            <h1 className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-4xl md:text-6xl font-extrabold text-center`}>
                Exclusive AI-Powered
            </h1>
            <h2 className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-4xl md:text-6xl font-bold text-center mt-5`}>
                idea & <span className="text-yellow-300">automation</span> services
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-amber-50">
                {data.map((curElm) => {
                    const { id, image, heading, para, button, toolTip } = curElm;
                    return (
                        <div key={id} className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <div className="relative group cursor-pointer">
                                <figure>
                                    <img
                                        src={image}
                                        alt="Robot"
                                        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
                                    />
                                </figure>

                                {/* Tooltip */}
                                <div className="absolute left-1/2 bottom-full mb-3 w-max -translate-x-1/2 scale-0 rounded-lg bg-yellow-300 text-black text-sm px-3 py-2 border border-neutral-600 shadow-md transition-all duration-200 group-hover:scale-100">
                                    {toolTip}
                                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-neutral-500"></div>
                                </div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6 max-w-md text-center md:text-left">
                                <h3 className={`${theme === "Dark" ? "text-white" : "text-gray-900"} text-2xl font-bold`}>{heading}</h3>

                                {/* Read More / Read Less Logic */}
                                <p className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-lg mt-3`}>
                                    {expandedCardId === id ? para : `${para.slice(0, 70)}...`}
                                    <button
                                        onClick={() => toggleReadMore(id)}
                                        className="text-blue-500 ml-2 hover:underline"
                                    >
                                        {expandedCardId === id ? "Read Less" : "Read More"}
                                    </button>
                                </p>

                                <span className="text-lg mt-4 text-yellow-300 cursor-pointer hover:underline block">
                                    {button}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
