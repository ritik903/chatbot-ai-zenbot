import React, { useContext, useEffect, useRef } from "react";
import { bioContext } from "./Context";

const MessageList = ({ messages }) => {
    const chatRef = useRef(null);
    const { theme } = useContext(bioContext)

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const cleanText = (text) => {
        return text.replace(/[*_~`]/g, "");
    };

    return (
        <div
            ref={chatRef}
            className="h-100 overflow-y-auto  mb-4 p-4 flex flex-col custom-scrollbar"
        >
            {messages.length === 0 ? (
                <p className="text-gray-500 text-sm text-center">
                    No messages yet, how can I help you? 🤖
                </p>
            ) : (
                messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-2 my-1 ${msg.sender === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {/* AI Image for bot messages */}
                        {msg.sender !== "user" && (
                            <img src="/image/ait2.webp" className="h-8 w-8 rounded-full shadow-lg shadow-blue-500/50" alt="AI" />
                        )}

                        {/* Message Box */}
                        <div
                            className={`p-2 rounded-lg max-w-xs ${msg.sender === "user"
                                ? `${theme === "Dark" ? "bg-neutral-900" : "bg-blue-900"} md:w-100 w-60 text-white md:text-[1.1rem] text-[0.9rem] ml-auto`
                                : "bg-gray-200 md:w-100 w-60 text-black md:text-[1.1rem] text-[0.9rem] mr-auto"
                                }`}
                        >
                            <p className="whitespace-pre-wrap">{cleanText(msg.text)}</p>
                            <p className="text-xs text-blue-600 text-right">{msg.time}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MessageList;
