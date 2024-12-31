import React from 'react'
import Service from '/service.jpg'
import Desktop from '/desktop.png'

export default function Services() {
    const steps = [
        {
            id: "01",
            title: "Research",
            description:
                "Excuse Deal say over contain performance from comparison new melancholy themselves.",
        },
        {
            id: "02",
            title: "Concept",
            description:
                "Excuse Deal say over contain performance from comparison new melancholy themselves.",
        },
        {
            id: "03",
            title: "Implement",
            description:
                "Excuse Deal say over contain performance from comparison new melancholy themselves.",
        },
    ];
    return (
        <div className='w-full h-auto mb-2 flex flex-col justify-center items-center'>
            <div id='services' className='w-[90%] h-auto mt-[100px] py-[20px] text-[28px] md:text-[38px] text-[#0072BB] text-center font-bold uppercase'>
                <h1>Services</h1>
            </div>
            <div className="w-[90%] mt-5  mx-auto p-6 md:p-8 bg-[#FFFFFF0D] rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                {/* Icon Section */}
                <div className="flex items-center justify-center md:justify-start w-16 h-16">
                    <img
                        src={Desktop}
                        alt="Web Icon"
                        className="w-12 h-12"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <h2 className=" mb-4 text-[20px] md:text-[24px] text-[#0072BB] decoration-[#0072BB] underline underline-offset-2 font-bold">
                        WEBSITE DEVELOPMENT
                    </h2>
                    <p className="text-[#CCCCCC] mb-4 leading-relaxed">
                        Migrate indulged speaking the horribless domestic position. Seeing get
                        rather her you esteem centric interfaces was out horrible domestic.
                        You instrument out reasonably.
                    </p>
                    <ul className="text-[#0072BB] font-semibold space-y-2">
                        <li>-- <span className="font-bold">Laravel Development</span></li>
                        <li>-- <span className="font-bold">WordPress Theme Development</span></li>
                        <li>-- <span className="font-bold">WooCommerce Plugin</span></li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex items-center justify-center">
                    <img
                        src={Service}
                        alt="Website Development"
                        className="rounded-[10px] shadow-md w-[300px] h-[300px]"
                    />
                </div>
            </div>
            <div className="w-[90%] pb-12 pt-5">
                <div className="mx-auto">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold text-[#0072BB] text-center mb-8">
                        My work process
                    </h2>

                    {/* Steps */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-[#FFFFFF0D] py-2 rounded-[10px] items-center text-center md:flex-1"
                            >
                                {/* Circle Number */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0072BB] to-[#0051bb] text-white font-bold text-lg mb-4">
                                    {step.id}
                                </div>
                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                {/* Description */}
                                <p className="text-[#CCCCCC] text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Horizontal Dotted Line */}
                    <div className="hidden md:block border-t border-dashed border-[#0072BB] mt-6 w-full"></div>
                </div>
            </div>
        </div>
    )
}
