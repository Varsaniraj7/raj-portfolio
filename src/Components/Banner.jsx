import React from 'react';
import hand from '/hand.png';
import { MdArrowOutward } from 'react-icons/md';
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Banner() {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 100) || 4000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 1000;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #ffffff }';
    document.body.appendChild(css);
  };



  return (
    <div id='home' className='w-full h-auto mt-[100px] flex flex-col items-center gap-12 my-12 md:flex-row md:justify-center'>
      {/* Left Section */}
      <div className='w-[90%] md:w-[45%] h-auto flex flex-col items-center p-6'>
        <h1 className='flex flex-wrap justify-center font-bold text-white text-[30px] sm:text-[40px] lg:text-[50px] leading-snug mb-6'>
          Hey <img src={hand} className='w-10 animate-wave-hand mx-2 sm:w-12 lg:w-[67px] h-10 sm:h-12 lg:h-[65px]' alt="Hand" /> I'm Raj
        </h1>
        <h1 className='flex justify-center items-center text-type-animation text-[18px] sm:text-[24px] lg:text-[28px] text-white mb-4'>
          <span
            className='txt-rotate border-2 border-[#0072BB] p-2'
            data-period='500'
            data-rotate='[ "Web Developer", "Professional Coder"]'>
          </span>
        </h1>
        <p className='text-[#cccccc] mt-4 md:ml-7 text-center leading-[28px] text-sm sm:text-base lg:text-lg'>
          Hi, my name is Dalton Grant, and I began using WordPress when it first started. I've spent most of my waking hours over the last ten years designing, programming, and operating WordPress sites.
        </p>
        <button className='text-white mt-6 border-2 flex items-center font-semibold text-sm sm:text-base lg:text-lg rounded-md bg-[#0072BB] border-transparent hover:border-2 hover:bg-[#ffffff] hover:text-[#04000B] px-4 sm:px-6 py-2 lg:px-8 lg:py-3 gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
          Hire Me Now <MdArrowOutward />
        </button>
        <div className="flex mt-6 justify-center gap-4 text-white">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#313030] flex justify-center items-center border-2 border-[#FFFFFF1A] rounded-full hover:text-[#0072BB]"
          >
            <FaFacebook />
          </a>
          <a
            href="www.linkedin.com/in/raj-varsani-2a952b30b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#313030] flex justify-center items-center border-2 border-[#FFFFFF1A] rounded-full hover:text-[#0072BB]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/9099586643" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#313030] flex justify-center items-center border-2 border-[#FFFFFF1A] rounded-full hover:text-[#0072BB]"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className='hidden lg:block w-[1px] h-[500px] absolute bottom-[100px] ml-[-1px] left-[50%] border border-[#313030] '>

      </div>
      <div className='hidden lg:block w-full  bg-red-0 absolute bg-ed-200 bottom-[100px]'>
        <img src="./4-dark.png" alt="" />
      </div>

      {/* Right Section */}
      <div className='w-[90%] md:w-[50%] h-auto'>
        <div className='w-full h-[100px] sm:h-[250px] md:h-[400px] flex flex-col items-center justify-end md:justify-center md:items-center rounded-md'>
          <div className='w-[280px] h-[100px] sm:w-[300px] bottom-[2px] sm:h-[150px] md:w-[300px] lg:w-[400px] md:h-[350px] bg-[#0072BB] relative  rounded-md'></div>
          <img
            src='/person (2).png'
            className='absolute h-[150px] sm:h-[250px]  md:h-[350px] object-contain'
            alt='Person'
          />
        </div>
      </div>
    </div>
  );
}
