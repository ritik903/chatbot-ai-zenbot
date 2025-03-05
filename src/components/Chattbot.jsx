import React, { useContext } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import useChatbot from "./useChatbot";
import { bioContext } from "./Context";

const Chatbot = () => {
    const { theme } = useContext(bioContext)
    const { messages, input, setInput, sendMessage, loading, closeChatbot, isActive } = useChatbot();

    return (
        <section className={`${theme === "Dark" ? "bg-neutral-800" : "bg-yellow-50"} md:pt-30 pt-20 pb-[3px]  md:pb-10`}>
            <div className={`max-w-2xl mx-auto border ${theme === "Dark" ? "bg-neutral-700" : "bg-green-50"} rounded-lg shadow-lg bg-color`}>
                {/* Header with Close Button & Active Status */}
                <ChatHeader isActive={isActive} closeChatbot={closeChatbot} />

                {/* Messages List */}
                <MessageList messages={messages} />

                {/* Input Box */}
                <MessageInput input={input} setInput={setInput} sendMessage={sendMessage} loading={loading} />
            </div>
        </section>
    );
};

export default Chatbot;
