import { useContext, useEffect, useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { bioContext } from "../components/Context";
import contactData from "../api/contact.json"

export const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { theme } = useContext(bioContext)
    const [data, setData] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    useEffect(() => {
        setData(contactData)
    }, [])

    return (
        <section>
            <div className={` min-h-screen grid place-content-center ${theme === "Dark" ? "bg-neutral-900" : "bg-yellow-50"} md:py-20 py-10 px-2`}>
                <div className="relative">
                    <div className="flec flex-col md:px-30 px-5 my-15 md:text-left text-center">
                        <h1 className={`${theme === "Dark" ? "text-white" : "text-gray-700"} text-2xl font-medium pl-2`}>contact with us</h1>
                        <h2 className={`${theme === "Dark" ? "text-white" : "text-gray-900"} md:text-6xl text-4xl font-bold mt-3 `}>Contact our experts</h2>
                        <h3 className={`${theme === "Dark" ? "text-white" : "text-gray-900"} md:text-6xl text-4xl font-medium mt-3`}>any <span className="text-yellow-300">assistance</span> you need</h3>
                    </div>
                    <div className="absolute  inset-0 left-210 top-25  pointer-events-none">
                        <div className="md:w-32 md:h-32   bg-gradient-to-r from-red-500 to-yellow-500 blur-3xl opacity-100"></div>
                    </div>
                </div>

                <div className={`max-w-6xl w-full flex flex-col md:flex-row ${theme === "Dark" ? "bg-black shadow-md shadow-gray-700" : "bg-white shadow-lg shadow-gray-400"} rounded-3xl overflow-hidden relative`}>
                    <div className="md:w-1/2 relative">
                        <img src="/image/contact.webp" alt="AI Assistant" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className={`text-4xl font-bold mb-6 ${theme === "Dark" ? "text-white" : "text-gray-900"}`}>Contact Our Experts</h2>
                        <p className="text-lg text-yellow-400 mb-4">Any Assistance You Need</p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center border bg-gray-800 text-white border-gray-700 rounded-lg p-3">
                                    <FaUser className="text-yellow-400 mr-2" />
                                    <input type="text" placeholder="Your name" className="bg-transparent w-full outline-none text-white" />
                                </div>
                                <div className="flex items-center border bg-gray-800 text-white border-gray-700 rounded-lg p-3">
                                    <FaPhone className="text-yellow-400 mr-2" />
                                    <input type="text" placeholder="Phone" className="bg-transparent w-full outline-none text-white" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center border bg-gray-800 text-white border-gray-700 rounded-lg p-3">
                                    <FaEnvelope className="text-yellow-400 mr-2" />
                                    <input type="email" placeholder="Email here" className="bg-transparent w-full outline-none text-white" />
                                </div>
                                <div className="flex items-center border bg-gray-800 text-white border-gray-700 rounded-lg p-3">
                                    <IoIosArrowDown className="text-yellow-400 mr-2" />
                                    <input type="text" placeholder="Subject" className="bg-transparent w-full outline-none text-white" />
                                </div>
                            </div>

                            <div className="flex items-start border bg-gray-800 text-white border-gray-700 rounded-lg p-3 h-32">
                                <FaCommentDots className="text-yellow-400 mr-2 mt-2" />
                                <textarea placeholder="Write your comment" className="w-full bg-transparent resize-none h-full outline-none text-white"></textarea>
                            </div>

                            <button className="bg-yellow-400 text-black font-bold py-3 w-full rounded-lg flex justify-center items-center transition hover:bg-yellow-300">
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="relative w-full h-screen">
                {!isLoaded && (
                    <div className={`absolute inset-0 flex items-center justify-center ${theme === "Dark" ? "bg-neutral-900" : "bg-yellow-50"}`}>
                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 border-4 border-t-transparent ${theme === "Dark" ? "border-white" : "border-black"}  rounded-full animate-spin`}></div>
                            <p className={`mt-4 text-lg font-bold ${theme === "Dark" ? "text-white" : "text-black"}`}>Loading Map...</p>
                        </div>
                    </div>
                )}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27404.5627836154!2d75.94887458071838!3d30.842703019974536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107614872ab7b5%3A0xaf8165cce2800588!2sSahnewal%2C%20Punjab!5e0!3m2!1sen!2sin!4v1740752950014!5m2!1sen!2sin"
                    className="w-full h-screen border-none"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setIsLoaded(true)}
                ></iframe>
            </div>
            <div className={`${theme === "Dark" ? "bg-neutral-900" : "bg-yellow-50"} text-white py-16 px-4`}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className={`${theme === "Dark" ? "text-white" : "text-gray-900"} font-semibold text-lg`}>QUICK SUPPORT INFO</p>
                    <h2 className={` ${theme === "Dark" ? "text-white" : "text-gray-900"} md:text-6xl text-4xl font-bold mt-2`}>
                        Contact <span className="text-yellow-300">Information</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                    {
                        data.map((curElm) => {
                            const { id, heading, para, para2 } = curElm
                            return <div key={id} className={` ${theme === "Dark" ? "bg-neutral-800 shadow-md shadow-gray-700" : "bg-white shadow-lg shadow-gray-400"}  p-6 rounded-xl text-center`}>
                                <div className="flex justify-center mb-4">
                                    <div className="bg-yellow-300 p-6 rounded-full">
                                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7.58 2 4 5.58 4 10c0 3.55 2.45 6.57 5.83 7.82L12 22l2.17-4.18C17.55 16.57 20 13.55 20 10c0-4.42-3.58-8-8-8z"></path></svg>
                                    </div>
                                </div>
                                <h3 className={`${theme === "Dark" ? "text-white" : "text-neutral-900"} font-bold text-2xl`}>{heading}</h3>
                                <p className="text-gray-400 text-ls mt-2">{para}<br /> {para2}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}
