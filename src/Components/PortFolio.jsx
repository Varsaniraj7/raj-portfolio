import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { RiShareForwardBoxFill } from 'react-icons/ri'

export default function PortFolio() {
  return (
    <div className='w-[100%] mb-2 flex flex-col items-center'>
      <div id='portfolio' className='w-[90%] h-auto py-[20px] text-[28px] md:text-[38px] text-[#0072BB] text-center font-bold uppercase'>
        <h1>PortFolio</h1>
      </div>
      <div className="w-[90%] my-2">
        <h2 className="text-center text-2xl text-white font-semibold my-4">
          Each project is a unique piece of designing 🧩
        </h2>

        <div className="flex flex-col lg:flex-row items-center my-8 mx-5 lg:mx-0 shadow-md rounded-2xl bg-[#FFFFFF0D]">
          <img
            src="blinkit.webp"
            alt="Blinkit Clone"
            className="w-full lg:w-1/2 h-[300px] object-fill rounded-2xl "
          />
          <div className="text-center lg:text-left lg:w-1/2 px-8 py-5">
            <h2 className="text-yellow-500 text-[24px] font-bold mb-3">BLINKIT</h2>
            <p className="text-[#CCCCCC] text-[18px] mb-5">
              Successfully crafted a visually striking front-end blinkit clone using
              HTML, CSS, JavaScript, and React js. Applied responsive design principles to ensure
              optimal viewing across devices, emphasizing attention to detail in
              replicating the original user interface.
            </p>
            <div className="link flex justify-center lg:justify-start space-x-5">
              <a
                href="https://github.com/Varsaniraj7/blinkit-clone.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#147efb] font-bold flex items-center space-x-2"
              >
                <span>Code</span>
                <h1 className='text-white'><FaGithub /></h1>
              </a>
              <a
                href="https://blinkit-clone-inky.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#147efb] font-bold flex items-center space-x-2"
              >
                <span>Live Demo</span>
                <h1 className='text-white' ><RiShareForwardBoxFill /></h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col lg:flex-row items-center mx-5 lg:mx-0 shadow-md rounded-[10px] bg-[#FFFFFF0D]">
          <div className="text-center lg:text-left lg:w-1/2 px-8 py-5">
            <h2 className="text-red-500 text-[24px] font-bold mb-3">NETFLIX</h2>
            <p className="text-[#CCCCCC] text-[18px] mb-5">
              Successfully crafted a visually striking front-end Netflix clone using
              HTML, CSS, and JavaScript. Applied responsive design principles to ensure
              optimal viewing across devices, emphasizing attention to detail in
              replicating the original user interface.
            </p>
            <div className="link flex justify-center lg:justify-start space-x-5">
              <a
                href="https://github.com/jitender1322/MyProjects/tree/main/Netflix_Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#147efb] font-bold flex items-center space-x-2"
              >
                <span>Code</span>
                <h1 className='text-white'><FaGithub /></h1>
              </a>
              <a
                href="../Netflix_Clone/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#147efb] font-bold flex items-center space-x-2"
              >
                <span>Live Demo</span>
                <h1 className='text-white' ><RiShareForwardBoxFill /></h1>
              </a>
            </div>
          </div>
          <img
            src="./netflix.webp"
            alt="Netflix Clone"
            className="w-full lg:w-1/2 h-[300px] object-fill rounded-2xl "
          />
        </div>
      </div>
    </div>
  )
}
