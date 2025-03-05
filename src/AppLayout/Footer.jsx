import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { GiStaticWaves } from "react-icons/gi";
import { FaGithubAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
    const date = new Date().getFullYear()

    const sendMessage = () => {
        const phoneNumber = "919056659781"; // Replace with your number (country code + number)
        const message = encodeURIComponent("Hello! I want to know more about your services."); // Encode message
        const url = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(url, "_blank"); // Open WhatsApp in a new tab
    };

    return (
        <footer className="bg-black text-white py-10 px-2">
            <div className="max-w-7xl mx-auto grid place-content-center grid-cols-1 md:grid-cols-3 md:gap-28 gap-10">
                {/* Newsletter Section */}
                <div>
                    <h2 className="text-5xl leading-15 font-bold text-yellow-300">Subscribe Our Newsletter</h2>
                    <p className="mt-5 text-xl">Join us today, get update everyday</p>
                    <div className="relative mt-4">
                        <input
                            type="email"
                            placeholder="Enter email..."
                            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full">
                            <FaArrowUpRightFromSquare />
                        </button>
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex justify-between ">
                    <div>
                        <h3 className="text-xl font-bold text-yellow-300">Company</h3>
                        <ul className="mt-2 space-y-2">
                            {[
                                "About Us",
                                "Opportunity",
                                "Events",
                                "Consulting",
                                "Our Blog",
                                "Contact Us",
                                "Careers",
                                "User Login",
                            ].map((item) => (
                                <li key={item} className="hover:text-yellow-400 text-xl font-light cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-yellow-300">Company</h3>
                        <ul className="mt-2 space-y-2">
                            {[
                                "Graphic Design",
                                "Marketing",
                                "Photography",
                                "Art Generate",
                                "Face Swap",
                                "Interior Design",
                                "Face Swap",
                                "Mockup Create",
                            ].map((item) => (
                                <li key={item} className="hover:text-yellow-400 text-xl font-light cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Instagram Section */}
                <div>
                    <h3 className="text-xl font-bold text-yellow-300">Instagram</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {["/image/footer.jpg", "/image/footer2.webp", "/image/footer3.webp", "/image/footer4.webp"].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt="Instagram post"
                                className="w-42 h-40 object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}

            <hr className="mt-20 bg-neutral-800 h-[1px] border-none" />
            <div className="flex md:flex-row flex-col md:justify-between gap-5 items-center md:py-10 py-4 md:px-20 px-0">
                <div className="flex md:gap-5 gap-2 items-center">
                    <h1 className="text-4xl text-yellow-300 font-bold"><GiStaticWaves /></h1>
                    <h1 className="text-4xl font-extrabold">AiForge</h1>
                </div>
                <div className="text-xl font-light text-center">Ritik © <span className="text-yellow-300">{date}.</span> All Rights Reserved.</div>
                <div className="flex gap-7 items-center list-none list">
                    <a href="https://github.com/ritik903" target="_blank" rel="noopener noreferrer"><li className="text-3xl rounded-full p-2 border-2 border-neutral-700"><FaGithubAlt /></li></a>
                    <a href="https://www.instagram.com/yoboy_ritik?utm_source=qr&igsh=Nm12cDdhcGE5bnBy" target="_blank" rel="noopener noreferrer"><li className="text-3xl rounded-full p-2 border-2 border-neutral-700"><RiInstagramFill /></li></a>
                    <a href="https://www.linkedin.com/in/ritik-choudhary-a29480319" target="_blank" rel="noopener noreferrer"><li className="text-3xl rounded-full p-2 border-2 border-neutral-700"><FaLinkedinIn /></li></a>
                    <li className="text-3xl rounded-full p-2 border-2 border-neutral-700" onClick={sendMessage} ><IoLogoWhatsapp /></li>
                </div>
            </div>

        </footer>
    );
}
