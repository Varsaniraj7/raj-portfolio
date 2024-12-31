import React from 'react'
import { FaFacebook, FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { IoMailOpenOutline } from 'react-icons/io5';


export default function Footer() {
    return (
        <div className='w-full flex justify-center items-center mt-4'>
            <footer className="w-[90%] text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm md:text-base">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span><FaGithub /></span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourusername/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span><FaLinkedinIn /></span>
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span><IoMailOpenOutline /></span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
