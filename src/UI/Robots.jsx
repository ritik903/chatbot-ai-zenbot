import React, { useContext } from "react";
import { bioContext } from "../components/Context";

const Robots = () => {
    const { theme } = useContext(bioContext)
    return (
        <div className={`relative h-screen w-full ${theme === "Dark" ? "bg-neutral-900" : "bg-yellow-50"} flex items-center justify-center px-4`}>
            {/* Main Chat UI */}
            <div className={`relative ${theme === "Dark" ? "bg-neutral-950" : "bg-white"} rounded-xl shadow-lg w-full max-w-[800px] h-[450px] p-6 overflow-hidden`}>
                {/* Robot Avatar */}
                <div className="absolute right-5 bottom-5 sm:right-10 sm:bottom-5">
                    <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl font-bold">
                            🤖
                        </div>
                    </div>
                </div>

                {/* Speech Bubble */}
                <div className="absolute left-1/4 sm:left-1/3 top-16 sm:top-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg shadow-lg">
                    AI is thinking...
                </div>

                {/* Status Bar */}
                <div className="absolute bottom-5 left-1/4 sm:left-1/3 flex items-center bg-gray-800 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md">
                    <div className="animate-spin h-3 w-3 sm:h-4 sm:w-4 border-t-2 border-blue-500 rounded-full mr-2"></div>
                    AI is generating...
                </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="absolute left-2 sm:left-5 top-1/3 bg-gray-800 p-2 sm:p-3 rounded-lg flex flex-col space-y-2 sm:space-y-4 shadow-lg">
                <SidebarIcon />
                <SidebarIcon />
                <SidebarIcon />
                <SidebarIcon />
            </div>

            {/* Notification Card */}
            <div className="absolute right-2 sm:right-10 top-5 sm:top-10 bg-gray-800 text-white p-2 sm:p-3 rounded-lg shadow-lg flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
                    ✅
                </div>
                <div>
                    <p className="text-xs sm:text-sm font-semibold">Code generation</p>
                    <p className="text-xs text-gray-400">1 min ago</p>
                </div>
                <div className="flex -space-x-1">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
};

const SidebarIcon = () => (
    <div className="p-1 sm:p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition w-5 h-5 sm:w-6 sm:h-6"></div>
);

const Avatar = () => (
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
);

export default Robots;
