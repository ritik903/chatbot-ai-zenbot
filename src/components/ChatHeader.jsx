import React, { useContext } from "react";
import { bioContext } from "./Context";

const ChatHeader = ({ isActive, closeChatbot }) => {
    const { theme } = useContext(bioContext)
    return (
        <div className={`flex justify-between items-center px-5 py-2 ${theme === "Dark" ? "bg-black" : "bg-blue-900"} relative rounded-b-3xl shadow-lg`}>
            <div>
                <div className="flex justify-center items-center gap-3">
                    <img src="/image/ait2.webp" className="h-10 w-auto" alt="" />
                    <div className="flex flex-col">
                        <h1 className="text-xl text-white font-semibold">Chatoy</h1>
                        <button className="text-center text-white text-xs mb-2">
                            {isActive ? "🟢 Active" : "🟡 Not Active"}
                        </button>
                    </div>
                </div>

            </div>
            <button
                onClick={closeChatbot}
                className="bg-yellow-300 text-black px-2 py-1 rounded-full"
            >
                Cleare All
            </button>
        </div>
    );
};

export default ChatHeader;
