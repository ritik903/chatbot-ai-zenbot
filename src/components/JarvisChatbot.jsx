import { useContext, useState } from "react";
import { FaMicrophone, FaSyncAlt, FaEdit, FaGlobeAsia, FaCopy } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { bioContext } from "../components/Context"

const Jarvis = () => {
    const [text, setText] = useState("");
    const [correctedText, setCorrectedText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [translatedText, setTranslatedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { theme } = useContext(bioContext)

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.onresult = (event) => {
            setText(event.results[0][0].transcript);
        };
        recognition.start();
        setIsListening(true);
        recognition.onend = () => setIsListening(false);
    };

    const correctGrammar = async () => {
        if (!text.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch("https://api.languagetool.org/v2/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    text: text,
                    language: "en-US"
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            let corrected = text;
            let offsetAdjustment = 0;

            corrected = corrected.replace(/(^|[.!?]\s+)([a-z])/g, (match, separator, char) => separator + char.toUpperCase());

            data.matches.forEach(match => {
                if (match.replacements.length > 0) {
                    const wordToReplace = corrected.slice(match.offset + offsetAdjustment, match.offset + offsetAdjustment + match.length);

                    if (/\b[A-Za-z]+\b/.test(wordToReplace) && /^[A-Z]/.test(wordToReplace)) {
                        return;
                    }

                    const start = match.offset + offsetAdjustment;
                    const end = start + match.length;
                    const before = corrected.slice(0, start);
                    const after = corrected.slice(end);
                    corrected = before + match.replacements[0].value + after;
                    offsetAdjustment += match.replacements[0].value.length - match.length;
                }
            });

            setCorrectedText(corrected);
        } catch (error) {
            console.error("Error fetching grammar correction:", error);
            setCorrectedText("Error correcting text. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const translateText = async (language) => {
        if (!correctedText.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(correctedText)}&langpair=en|${language}`);
            const data = await response.json();
            setTranslatedText(data.responseData.translatedText);
        } catch (error) {
            console.error("Error fetching translation:", error);
            setTranslatedText("Error translating text. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const speakText = (textToSpeak) => {
        if (!textToSpeak.trim()) return;
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        synth.speak(utterance);
    };

    return (
        <div className={`w-full min-h-screen flex justify-center pt-20 pb-3 items-center bg-gradient-to-br ${theme === "Dark" ? "from-neutral-900 to-neutral-800" : "bg-yellow-50"} `}>
            <div className={`p-6 max-w-md w-full mx-auto ${theme === "Dark" ? "bg-neutral-800 shadow-xs shadow-gray-700" : "bg-green-50 shadow-xs shadow-blue-950"}  rounded-xl shadow-2xl space-y-6 transform  hover:scale-105`}>
                <h1 className={`text-3xl font-bold ${theme === "Dark" ? "text-amber-500" : "text-neutral-900"}  text-center animate-pulse`}>
                    AI English Chatbot
                </h1>

                {/* Text Input */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`w-full p-3 ${theme === "Dark" ? "bg-neutral-700 text-white focus:ring-amber-500" : "bg-gray-800 text-white focus:ring-blue-950"}   rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2  transition-all duration-200`}
                    placeholder="Type or speak here..."
                    rows="4"
                ></textarea>

                {/* Buttons */}
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={startListening}
                        disabled={isListening}
                        className={`px-4 py-2 ${theme === "Dark" ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-blue-950 text-white hover:bg-indigo-900"} text-white rounded-lg  disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200`}
                    >
                        {isListening ? (
                            <span className="flex justify-center items-center gap-2">
                                <span className="animate-pulse">Listening...</span>
                            </span>
                        ) : (
                            <span className="flex justify-center items-center gap-2">
                                <FaMicrophone className="text-lg" /> {/* Microphone Icon */}
                                <span>Speak</span>
                            </span>
                        )}
                    </button>

                    <button
                        onClick={() => speakText(text)}
                        disabled={!text.trim()}
                        className="px-4 py-2 bg-blue-500 flex justify-center gap-2 items-center text-white rounded-lg hover:bg-blue-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <HiSpeakerWave className="text-lg" /> Speak Input Text
                    </button>

                    <button
                        onClick={correctGrammar}
                        disabled={!text.trim() || isLoading}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {isLoading ? (
                            <span className="flex justify-center items-center gap-2">
                                <FaSyncAlt className="animate-spin" /> {/* Spinning Sync Icon */}
                                <span>Correcting...</span>
                            </span>
                        ) : (
                            <span className="flex justify-center items-center gap-2">
                                <FaEdit /> {/* Edit Icon */}
                                <span>Correct Grammar</span>
                            </span>
                        )}
                    </button>

                    {/* Corrected Text */}
                    {correctedText && (
                        <div className={`mt-4 p-3 ${theme === "Dark" ? "bg-neutral-700 text-white focus:ring-amber-500" : "bg-gray-800 text-white focus:ring-blue-950"} rounded-lg animate-fade-in`}>
                            <p className="text-green-400">{correctedText}</p>
                            <button
                                onClick={() => speakText(correctedText)}
                                disabled={!correctedText.trim()}
                                className="mt-2 px-3 py-1 bg-purple-500 flex justify-center gap-2 items-center text-white rounded-lg hover:bg-purple-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200"
                            >
                                <HiSpeakerWave className="text-lg" /> Speak Corrected Text
                            </button>
                        </div>
                    )}

                    {/* Translation Buttons */}
                    <div className="flex space-x-2">
                        <button
                            onClick={() => translateText('hi')}
                            disabled={!correctedText.trim() || isLoading}
                            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <FaSyncAlt className="animate-spin" /> {/* Spinning Sync Icon */}
                                    <span>Translating...</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <FaGlobeAsia /> {/* Globe Icon */}
                                    <span className="text-xs">Translate to Hindi</span>
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => translateText('pa')}
                            disabled={!correctedText.trim() || isLoading}
                            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <FaSyncAlt className="animate-spin" /> {/* Spinning Sync Icon */}
                                    <span>Translating...</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <FaGlobeAsia /> {/* Globe Icon */}
                                    <span className="text-xs">Translate to Punjabi</span>
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Translated Text */}
                    {translatedText && (
                        <div className={`mt-4 p-3 ${theme === "Dark" ? "bg-neutral-700 text-white focus:ring-amber-500" : "bg-gray-800 text-white focus:ring-blue-950"} rounded-lg animate-fade-in`}>
                            <p className="text-blue-400">{translatedText}</p>
                        </div>
                    )}

                    {/* Copy Corrected Text */}
                    <button
                        onClick={() => navigator.clipboard.writeText(correctedText)}
                        disabled={!correctedText.trim()}
                        className="px-4 py-2 bg-gray-500 flex justify-center items-center gap-2 text-white rounded-lg hover:bg-gray-600 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <FaCopy className="text-lg" /> Copy Corrected Text
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jarvis;