import { useContext } from "react";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope, FaEyeSlash } from "react-icons/fa";
import { bioContext } from "../components/Context";

export const SignIn = () => {
    const { theme } = useContext(bioContext)

    return (
        <div className={`flex min-h-screen items-center justify-center ${theme === "Dark" ? "bg-neutral-900" : "bg-yellow-50"} text-white p-4`}>
            <div className={`max-w-4xl w-full flex flex-col md:flex-row ${theme === "Dark" ? "bg-black shadow-xs shadow-gray-700" : "bg-green-50 shadow-xs shadow-blue-950"} rounded-lg overflow-hidden`}>
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('image/signin.webp')" }}></div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className={`text-3xl font-bold text-center ${theme === "Dark" ? "text-white" : "text-gray-900"}`}>Sign In AIForge</h2>
                    <p className="text-center text-gray-400 mt-2">Choose one of the following sign-in methods</p>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                            <FaGoogle /> Sign in with Google
                        </button>
                        <button className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
                            <FaApple />
                        </button>
                        <button className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
                            <FaFacebook />
                        </button>
                    </div>

                    <div className="my-6 text-center text-gray-500">Or Sign In Using Your Email</div>

                    {/* Email Input */}
                    <div className="relative mb-4">
                        <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400" />
                        <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-4">
                        <input type="password" placeholder="Password" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400" />
                        <FaEyeSlash className="absolute right-3 top-3 text-gray-400" />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-yellow-400" /> Remember Me
                        </label>
                        <a href="#" className="hover:text-yellow-400">Forgot your password?</a>
                    </div>

                    {/* Sign In Button */}
                    <button className={`w-full py-3 ${theme === "Dark" ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-blue-950 text-white hover:bg-indigo-900"}  font-bold rounded-lg flex items-center justify-center gap-2 `}>
                        Sign In ↗
                    </button>
                </div>
            </div>
        </div>
    );
}
