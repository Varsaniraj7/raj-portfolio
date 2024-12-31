import { TextField } from '@mui/material';
import React from 'react'
import { BiLogoTelegram } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocation, IoMail } from 'react-icons/io5';

export default function Contact() {
	return (
		<div className="w-full bg-transparent h-auto flex flex-col items-center justify-center">
			<div id='contact' className='w-[90%] h-auto py-[20px] mt-[100px] text-[28px] md:text-[38px] text-[#0072BB] text-center font-bold uppercase'>
				<h1>Contact</h1>
			</div>
			<div className="w-[90%] bg-[#FFFFFF0D] shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Section */}
				<div className="space-y-6 flex flex-col justify-center py-6 rounded-[10px] items-center g-[#0073bb]">
					{/* Phone */}
					<div className="w-[80%] flex items-center space-x-4">
						<div className="bg-[#ffffff]  p-3 rounded-full">
							<div className='h-6 w-6 flex justify-center items-center text-[#0073bb]'><FaPhoneAlt /></div>
						</div>
						<div>
							<h3 className="font-bold text-white">PHONE</h3>
							<p className="text-[#cccccc]">+919099586643</p>
						</div>
					</div>

					{/* Email */}
					<div className="w-[80%] flex items-center space-x-4">
						<div className="bg-[#ffffff]  p-3 rounded-full">
							<div className='h-6 w-6 flex justify-center items-center text-[#0073bb]'><IoMail /></div>
						</div>
						<div>
							<h3 className="font-bold text-white">EMAIL</h3>
							<p className="text-[#CCCCCC]">varsaniraj7@gmail.com</p>
						</div>
					</div>

					{/* Country */}
					<div className="w-[80%] flex items-center space-x-4">
						<div className="bg-[#ffffff]  p-3 rounded-full">
							<div className='h-6 w-6 flex justify-center items-center text-[#0073bb]'><IoLocation /></div>
						</div>
						<div>
							<h3 className="font-bold  text-white">COUNTRY</h3>
							<p className="text-[#CCCCCC] ">India</p>
						</div>
					</div>

					<div className='w-[80%] border-b-2'></div>

					{/* Availability */}
					<ul className="w-[80%] mt-4 text-[#CCCCCC] list-disc pl-5">
						<li>Available for work - 40 Hours / Weekly</li>
						<li>Active Status - Active</li>
					</ul>
				</div>

				{/* Right Section */}
				<div>
					<h2 className="text-[28px] font-bold text-white mb-6">
						Let's work together!
					</h2>
					<form className="space-y-4">
						{/* Name and Phone */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<TextField
								id="n"
								label="Name"
								variant="standard"
								className="p-3 border border-white  text-white rounded w-full"
								sx={{
									'& .MuiInputLabel-root': { color: 'white' }, // Label color
									'& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color
									'& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#0073bb' },
									'& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Underline color
									'& .MuiInputBase-input': { color: 'white' }, // Text color
								}
								}
							/>
							<TextField
								id="number"
								label="Number"
								variant="standard"
								className="p-3 border border-white  text-white rounded w-full"
								sx={{
									'& .MuiInputLabel-root': { color: 'white' }, // Label color
									'& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color
									'& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Underline color
									'& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#0073bb' },
									'& .MuiInputBase-input': { color: 'white' }, // Text color
								}}
							/>
						</div>

						{/* Email */}
						<TextField
							id="emal"
							label="Email"
							variant="standard"
							className="p-3 border border-gray-300 rounded w-full"
							required
							sx={{
								'& .MuiInputLabel-root': { color: 'white' }, // Label color
								'& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color before input
								'& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Underline color after input
								'& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#0073bb' },
								'& .MuiInputBase-input': { color: 'white' }, // Text color
							}}
						/>


						{/* Message */}
						<textarea
							id='msg'
							placeholder="Tell Us About Project*"
							rows="4"
							className="p-3 border border-gray-300 bg-transparent text-white rounded w-full"
							required
						></textarea>

						{/* Submit Button */}
						<button
							type='submit'
							className='text-white mt-6 border-2 flex items-center font-semibold text-sm sm:text-base  rounded-md bg-[#0072BB] border-transparent hover:border-2 hover:bg-[#ffffff] hover:text-[#04000B] px-4 sm:px-6 py-2 lg:px-8 lg:py-3 gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
						>
							<BiLogoTelegram />
							Get In Touch
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
