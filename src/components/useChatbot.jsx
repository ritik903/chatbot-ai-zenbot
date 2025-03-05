import { useState, useEffect } from "react";
import axios from "axios";

const useChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // localStorage on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem("chatMessages");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    //  localStorage
    const saveMessages = (msgs) => {
        localStorage.setItem("chatMessages", JSON.stringify(msgs));
    };

    //Update Active Status
    useEffect(() => {
        setIsActive(true);
        const timer = setTimeout(() => setIsActive(false), 5000);
        return () => clearTimeout(timer);
    }, [messages]);

    // get current time
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user", time: getCurrentTime() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        saveMessages(newMessages);
        setInput("");
        setLoading(true);

        // Show "Typing..." indicator
        const typingIndicator = { text: "...", sender: "bot", time: getCurrentTime() };
        setMessages([...newMessages, typingIndicator]);

        try {
            console.log("Sending request to API...");
            console.log("Request Payload:", {
                contents: [{ role: "user", parts: [{ text: input }] }],
            });

            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
                    contents: [{ role: "user", parts: [{ text: input }] }],
                },
                {
                    headers: { "Content-Type": "application/json" },
                    params: { key: import.meta.env.VITE_GEMINI_API_KEY },
                }
            );

            console.log("API Response:", response.data);

            // Remove typing indicator and add bot's response
            const botMessage = {
                text: response.data.candidates[0].content.parts[0].text,
                sender: "bot",
                time: getCurrentTime(),
            };
            const updatedMessages = [...newMessages, botMessage];

            setMessages(updatedMessages);
            saveMessages(updatedMessages);
        } catch (error) {
            console.error("Error fetching response:", error.response?.data || error.message);
            // Optionally, add an error message to the chat
            const errorMessage = {
                text: "Sorry, something went wrong. Please try again.",
                sender: "bot",
                time: getCurrentTime(),
            };
            const updatedMessages = [...newMessages, errorMessage];
            setMessages(updatedMessages);
            saveMessages(updatedMessages);
        } finally {
            setLoading(false);
        }
    };

    const closeChatbot = () => {
        setMessages([]);
        localStorage.removeItem("chatMessages");
    };

    return { messages, input, setInput, sendMessage, loading, closeChatbot, isActive };
};

export default useChatbot;