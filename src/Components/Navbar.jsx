import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 75; // Adjust this to match the height of your fixed header
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="bg-[#120f12] sm:bg-[#2b2a2a] w-full mb-8">
            <div className="mx-auto px-4 sm:px-6 fixed bg-[#120f12] sm:bg-[#2b2a2a] w-full z-50 top-0 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-[86px]">
                    {/* Logo */}
                    <div className="flex-shrink-0 order-2 sm:order-first">
                        <a href="/" className="">
                            <img
                                src="/logo.png"
                                className="w-[130px] lg:w-[151px] lg:h-[70px] object-cover h-[60px]"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex text-[12px] md:text-[14px] uppercase font-bold tracking-[1px] text-white">
                        <div className="flex space-x-4">
                            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                                <a
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default anchor behavior
                                        scrollToSection(item.toLowerCase());
                                    }}
                                    href={`#${item.toLowerCase()}`} // Use this for fallback or better accessibility
                                    key={item}
                                    className="text-gray-300 hover:text-white px-4 py-2"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex px-[40px] py-[12px] bg-white text-[#04000B] items-center rounded-[30px] hover:bg-[#0072BB] hover:text-white hover:rounded-tl-[10px] hover:rounded-br-[10px] hover:rounded-bl-[-10px] hover:rounded-tr-[-10px] transition-all duration-300">
                        <p className="text-[18px] font-semibold">Let's Talk</p>
                        <h1 className="text-[24px] ml-2">
                            <BiMessage />
                        </h1>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden order-1">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-300 hover:text-white text-[28px] focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <AiOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Side Menu */}
            <div
                className={`fixed top-0 left-0 h-full bg-[#313131] text-white w-[75%] transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="h-[120px] flex items-center justify-between px-4">
                    <img
                        src="/logo.png"
                        className="w-[150px] object-cover h-[100px]"
                        alt="Logo"
                    />
                    <button
                        className="w-[50px] h-[50px] flex justify-center items-center text-gray-300 text-[32px] hover:text-white"
                        onClick={toggleMenu}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="mt-16 text-[16px] tracking-[2px] px-4 font-bold space-y-6">
                    {["Home", "Services", "Portfolio", "Resume", "Contact"].map((item) => (
                        <a
                            href={`#${item.toLowerCase()}`}
                            key={item}
                            className="block text-gray-300 border-b-[1px] border-[#888888] mx-2 hover:text-white py-2"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
