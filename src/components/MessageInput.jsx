import React, { useContext } from "react";
import { BsSendFill } from "react-icons/bs";
import { bioContext } from "./Context";
const MessageInput = ({ input, setInput, sendMessage, loading }) => {

    const { theme } = useContext(bioContext)

    return (
        <div className={`flex items-center space-x-2 px-5 py-2 ${theme === "Dark" ? "bg-black" : "bg-blue-900"} relative rounded-t-3xl shadow-lg`}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border border-white text-white rounded-lg"
                placeholder="Type a message..."
            />
            <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
                disabled={loading}
            >
                {loading ? "..." : <BsSendFill />}
            </button>
        </div>
    );
};

export default MessageInput;
