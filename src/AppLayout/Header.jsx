import { useContext, useState } from "react";
import { GiStaticWaves } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { bioContext } from "../components/Context";

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const { theme, handleToggleBtn } = useContext(bioContext)

    const toggleSubmenu = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const menuItems = [
        { title: "Home", path: "/", submenu: [{ name: "Home 01", path: "/home-01" }, { name: "Home 02", path: "/home-02" }, { name: "Home 03", path: "/home-03" }] },
        { title: "Chatbot", path: "/chatbot", submenu: [] },
        { title: "Pages", path: "/pages", submenu: [{ name: "Weather App", path: "https://ritik-skywave.netlify.app/" }, { name: "Find Dogs", path: "https://ritik-puppyportal.netlify.app/" }, { name: "Portfolio", path: "https://yoboyritik-port.netlify.app/" }, { name: "E-commerce Website", path: "https://ritik-e-store.netlify.app/" }, { name: "Currency-Convert", path: "https://ritik-ratexchange.netlify.app/" }, { name: "Rent Home", path: "https://ritik903.github.io/homegethome/" }, { name: "Curd-Opration", path: "https://ritik-curd.netlify.app/" }] },
        { title: "Contact", path: "/contact", submenu: [] },
    ];

    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="fixed w-full py-5 bg-neutral-900 text-amber-50 z-50 border-b-2  border-neutral-700">
                <section className="flex justify-between items-center px-10 mainHesader">
                    {/* Logo Section */}
                    <div className="flex justify-center gap-3 items-center">
                        <h1 className="text-3xl text-yellow-300 font-bold"><GiStaticWaves /></h1>
                        <h1 className="text-3xl font-extrabold">AiForge</h1>
                    </div>

                    {/* Navigation Menu */}
                    <div>
                        <ul className="hidden md:flex justify-center items-center gap-10 text-xl lists">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <NavLink to={item.path} className="flex items-center gap-2 hover:text-yellow-300">
                                        {item.title} {item.submenu.length > 0 && <FaChevronDown className="text-sm" />}
                                    </NavLink>
                                    {item.submenu.length > 0 && (
                                        <ul className="absolute left-0 mt-2 w-50 border-t-4 border-yellow-300 bg-black text-white rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <NavLink to={subItem.path} className="block px-4 py-2 hover:bg-gray-700">
                                                        <a href={subItem.path} target="_blank" rel="noopener noreferrer"> {subItem.name}</a>
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right-Side Icons */}

                    <div>
                        <ul className="flex justify-center items-center md:gap-7 gap-3 text-xl search">
                            <li>
                                <button
                                    onClick={handleToggleBtn}
                                    className={`relative w-14 h-7 md:w-16 md:h-8 rounded-full p-1 transition-all duration-300 ease-in-out flex items-center ${theme === "Dark" ? "bg-gray-800" : "bg-gray-200"
                                        }`}
                                >
                                    {/* Sliding Circle */}
                                    <span
                                        className={`absolute w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${theme === "Dark" ? "bg-gray-700 translate-x-7 md:translate-x-8" : "bg-white translate-x-0"
                                            }`}
                                    ></span>

                                    {/* Icons */}
                                    <span className="absolute left-1.5 text-xs md:text-sm">🌞</span>
                                    <span className="absolute right-1.5 text-xs md:text-sm">🌙</span>
                                </button>
                            </li>
                            <NavLink to="/join-me">
                                <li className="hidden md:flex justify-center items-center gap-3 cursor-pointer hover:text-yellow-300">
                                    <span className="text-yellow-300"><BsRobot /></span>Join Now
                                </li>
                            </NavLink>

                            <li className="text-2xl cursor-pointer hover:text-yellow-300" onClick={() => setIsSearchOpen(true)}>
                                <IoSearch />
                            </li>
                            <li
                                className="text-3xl cursor-pointer hover:text-yellow-300"
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <IoMenu />
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-[80]" onClick={() => setIsSearchOpen(false)}>
                    <div className="relative w-full max-w-lg p-5">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full text-yellow-300 bg-transparent border-b pb-3 border-yellow-300 text-xl outline-none text-center"
                            autoFocus
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button className="absolute top-0 right-0 text-3xl text-yellow-300" onClick={() => setIsSearchOpen(false)}>
                            <IoClose />
                        </button>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-0 z-[60] transition-all duration-300 ${isSidebarOpen ? "backdrop-blur-xs bg-black/50" : "pointer-events-none"}`}
                onClick={() => setIsSidebarOpen(false)}
            >
                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-black text-white p-6 border-l-2 border-yellow-300 transition-transform duration-300 z-[70] ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-4 text-yellow-300 text-3xl"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <IoClose />
                    </button>

                    {/* Sidebar Content */}
                    <div className="mt-10">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <GiStaticWaves className="text-4xl text-yellow-300" />
                            <h1 className="text-3xl font-bold">AiForge</h1>
                        </div>

                        {/* Mobile Menu */}
                        <div>
                            <ul className="visible md:hidden text-xl lists">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="border-b border-gray-700">
                                        <div className="flex justify-between items-center py-3 px-4 cursor-pointer hover:text-yellow-300" onClick={() => toggleSubmenu(index)}>
                                            <NavLink to={item.path} className="flex-1" onClick={closeSidebar}>
                                                {item.title}
                                            </NavLink>
                                            {item.submenu.length > 0 && (openIndex === index ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />)}
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {item.submenu.length > 0 && (
                                                <ul className="bg-neutral-800 text-white rounded shadow-lg">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="border-t border-gray-700">
                                                            <NavLink to={subItem.path} className="block px-4 py-2 hover:bg-gray-700" onClick={closeSidebar}>
                                                                {subItem.name}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <NavLink to="/join-me">
                            <li className="visible md:hidden flex list-none items-center mt-5 text-2xl border-b-2 w-34 pb-2 border-yellow-300 gap-3 cursor-pointer hover:text-yellow-300" onClick={closeSidebar}>
                                <span className="text-yellow-300"><BsRobot /></span>Join Now
                            </li>
                        </NavLink>

                        {/* Description */}
                        <p className="mt-4 text-gray-300">
                            Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <h2 className="text-lg font-bold">Contact Info</h2>
                            <p className="mt-3">📍 Main Street, Sahnewal, Ludhiana</p>
                            <p className="mt-3">📧 ritikchoudhary90566@gmail.com</p>
                            <p className="mt-3">⏰ Mon-Friday, 09am - 05pm</p>
                            <p className="mt-3">📞 +91-9056659781</p>
                        </div>

                        {/* Button */}
                        <button className="w-full border border-yellow-300 text-yellow-300 py-2 mt-6 rounded-full hover:bg-yellow-300 hover:text-black transition">
                            Get A Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};