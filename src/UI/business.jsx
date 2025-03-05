import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { bioContext } from "../components/Context";
const accordionData = [
    {
        title: "What is AI?",
        content: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines."
    },
    {
        title: "How does AI work?",
        content: "AI works by using algorithms and large amounts of data to recognize patterns and make decisions."
    },
    {
        title: "Why is AI important?",
        content: "AI is important because it can automate tasks, improve efficiency, and assist in problem-solving."
    }
];

export const Business = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const {theme} = useContext(bioContext)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div class={`grid place-content-center w-full min-h-screen ${theme === "Dark" ? "bg-black" : "bg-yellow-50"}`}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="flex gap-5">
                    <img src="/image/robo3.png" alt="" className="md:h-auto md:w-[23vw] w-[40vw]" />
                    <img src="/image/robo4.jpg" alt="" className="md:h-auto md:w-[23vw] w-[40vw]" />
                </div>
                <div className="max-w-xl mx-auto mt-10">
                    <h1 className={`text-center md:text-6xl text-4xl ${theme === "Dark" ? "text-white" :"text-gray-900"} font-bold`}>Harnessing AI for</h1>
                    <h2 className={`text-center md:text-5xl text-2xl ${theme === "Dark" ? "text-white" : "text-gray-900"} mt-3`}><span className="text-yellow-300">business</span> success</h2>
                    {accordionData.map((item, index) => (
                        <div key={index} className="mb-4 border border-b-white/20 md:w-[40vw] w-[90vw] rounded-lg mt-6 duration-2000 ease-in-expo">
                            <button
                                className={`w-full p-4 text-left flex justify-between items-center text-white text-2xl ${theme === "Dark" ? "hover:bg-neutral-800" : "hover:bg-yellow-200" }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"} font-semibold`}>{item.title}</span>
                                <span className={`${theme === "Dark" ? "text-white" : "text-gray-900"}`}>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-xl text-yellow-300">{item.content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
