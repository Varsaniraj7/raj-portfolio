import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function About() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Raj CV.pdf"; // Replace with your file URL
        link.download = "Raj CV.pdf"; // The name of the downloaded file
        link.click();
    }
    return (
        <div  id="about" className='md:mt-[150px] w-full h-auto flex flex-col items-center text-white'>
            <div className='w-[90%] h-auto py-[20px] text-[28px] md:text-[38px] text-[#0072BB] text-center font-bold uppercase'>
                <h1>about me</h1>
            </div>
            <div className='w-[90%] h-auto flex mt-5 '>
                <div className='w-full h-auto py-[10px] md:flex flex-col justify-center items-center md:w-[50%]'>
                    <p className='text-[18px] text-[#CCCCCC]' >
                        As a skilled web developer, I specialize in creating responsive, user-friendly websites with a
                        focus on modern design and efficient code. I excel in front-end development, with a deep
                        understanding of HTML, CSS, JavaScript, and various frameworks. My passion is turning
                        ideas into functional and aesthetically pleasing digital experiences.
                    </p>
                    <button onClick={handleDownload} className='text-white mt-6  border-2 flex items-center font-semibold text-sm sm:text-base lg:text-lg rounded-[10px] hover:border-2 hover:bg-[#ffffff] hover:text-[#04000B] px-4 sm:px-6 py-2 lg:px-8 lg:py-3 gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                        Download CV
                    </button>
                </div>
                <div className='hidden md:flex justify-around items-center w-[50%] h-auto'>
                    <div className='w-[150px] h-[150px] lg:w-[200px] xl:w-[280px] flex flex-col justify-center items-center rounded-[10px] bg-[#ffffff1a] border border-transparent hover:border-[#0072BB] transition-all duration-300'>
                        <h1 className='text-[40px] lg:text-[50px] font-semibold text-[#0072BB]'>
                            18+
                        </h1>
                        <h2 className='text-[18px] font-semibold text-center'>
                            Years of Experience
                        </h2>
                    </div>

                    <div className='w-[150px] h-[150px] lg:w-[200px] xl:w-[280px] flex flex-col justify-center items-center rounded-[10px] bg-[#ffffff1a] border border-transparent hover:border-[#0072BB] transition-all duration-300'>
                        <h1 className='text-[40px] lg:text-[50px] font-semibold text-[#0072BB]'>
                            56+
                        </h1>
                        <h2 className='text-[18px] font-semibold text-center'>
                            Projects Completed
                        </h2>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-auto flex flex-col md:flex-row gap-3 mt-5'>
                <div className='w-full h-auto gap-10 flex justify-between flex-wrap border-emerald-100'>

                    <div className='w-full h-auto flex flex-col xl:w-[50%] bg-green-00 gap-10'>
                        <div className='w-full max-w-[500px] h-auto p-5 sm:p-8 md:p-10 flex flex-col rounded-[10px] gap-4 bg-[#FFFFFF0D] mx-auto'>
                            <h1 className='text-[20px] md:text-[24px] text-[#0072BB] decoration-[#0072BB] underline underline-offset-2 font-bold '>Biography</h1>
                            <div className='flex  flex-wrap gap-4 mt-4'>
                                <div className='w-[180px] flex flex-col justify-between'>
                                    <h5 className='font-medium'>Name</h5>
                                    <p className='text-[#CCCCCC]'>Varsani Raj</p>
                                </div>
                                <div className='w-[180px] flex flex-col justify-between'>
                                    <h5 className='font-medium'>Birthday</h5>
                                    <p className='text-[#CCCCCC]'>7 July, 2006</p>
                                </div>
                                <div className='w-[180px] flex flex-col justify-between'>
                                    <h5 className='font-medium'>Email</h5>
                                    <p className='text-[#CCCCCC]'>varsaniraj7@gmail.com</p>
                                </div>
                                <div className='w-[180px] flex flex-col  justify-between'>
                                    <h5 className='font-medium'>Skype</h5>
                                    <p className='text-[#CCCCCC]'>shawonnby</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-[500px] mx-auto p-6 md:p-10 bg-[#FFFFFF0D] rounded-lg shadow-lg text-white">
                            {/* Title */}
                            <h1 className="text-[20px] md:text-[24px] text-[#0072BB] decoration-[#0072BB] underline underline-offset-2 font-bold">
                                Personal Skill
                            </h1>

                            {/* Skill Items */}
                            <div className="flex flex-col gap-6 mt-4 ">
                                {/* Skill 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                        <img
                                            src="https://img.icons8.com/ios-filled/50/FFFFFF/laravel.png"
                                            alt="OOP Icon"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">75%</h3>
                                        <p className="text-[#CCCCCC] font-semibold">Object oriented programming</p>
                                    </div>
                                </div>

                                {/* Skill 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                                        <img
                                            src="https://img.icons8.com/ios-filled/50/FFFFFF/react-native.png"
                                            alt="React Icon"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">90%</h3>
                                        <p className="text-[#CCCCCC] font-semibold">Front-End with React</p>
                                    </div>
                                </div>

                                {/* Skill 3 */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <img
                                            src="https://img.icons8.com/ios-filled/50/FFFFFF/html-5.png"
                                            alt="HTML5 Icon"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">89%</h3>
                                        <p className="text-[#CCCCCC] font-semibold">Advance frontend development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[500px] xl:w-[50%] mx-auto p-6 md:p-10 bg-[#FFFFFF0D] flex flex-col gap-4 rounded-[10px] text-white">
                        {/* Title */}
                        <h1 className="text-[20px] md:text-[24px] text-[#0072BB] decoration-[#0072BB] underline underline-offset-2 font-bold">
                            Education
                        </h1>
                        <div className="relative border-l-2 border-[#0072BB] mt-4 pl-6">
                            {/* Education Item 1 */}
                            <div className="mb-8 relative">
                                {/* Circle */}
                                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-[#0072BB] rounded-full border-2 border-[#1E2A35]"></div>
                                <h3 className="text-lg md:text-xl font-bold mb-1">Diploma In Computer Engineering</h3>
                                <p className="text-[#0072BB] font-semibold">Atmiya University</p>
                                <p className="text-sm mb-2">2022 - 2025</p>
                                <p className="text-[#CCCCCC]">
                                    The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                                </p>
                            </div>

                            {/* Education Item 2 */}
                            <div className="relative">
                                {/* Circle */}
                                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-[#0072BB] rounded-full border-2 border-[#1E2A35]"></div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 capitalize">full stack developer</h3>
                                <p className="text-[#0072BB] font-semibold">Red & White Multimedia Education</p>
                                <p className="text-sm mb-2">2025 - Present</p>
                                <p className="text-[#CCCCCC]">
                                    The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className='w-full h-[200px] border border-emerald-100'></div> */}
            </div>
        </div>
    )
}
// https://pub-0ee57f0db96747b48773fe9937e6a4db.r2.dev/Senna.S01.1080p.x264.Hindi.English.Portuguese.Esubs.Vegamovies.is.zip