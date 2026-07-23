"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";


export default function BannerSection() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const handleEnquireOpen = () => {
    setIsEnquireOpen(true);
  };

  const handleEnquireClose = () => {
    setIsEnquireOpen(false);
  };

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    setIsEnquireOpen(false);
  };

  return (
    <>
      <div
        className={`fixed left-1/2 top-1/2 z-1000 w-[min(92vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 text-center shadow-2xl transition-all duration-300 ${
          isEnquireOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
        aria-hidden={!isEnquireOpen}
      >
        <h2 className="relative mb-2 text-lg font-semibold text-slate-950">
          Enquire Now
        </h2>
        <button
          type="button"
          className="absolute right-3 top-3 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"
          onClick={handleEnquireClose}
          aria-label="Close enquiry form"
        >
          <IoCloseSharp />
        </button>

        <p className="mb-4 text-sm text-gray-600">
          Share a few details and we’ll get back to you.
        </p>
        <form className="space-y-3" onSubmit={handleEnquirySubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-2 focus:border-lime-800 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-300 p-2 focus:border-lime-800 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 p-2 focus:border-lime-800 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-lime-950 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-lime-900"
          >
            Submit
          </button>
        </form>
      </div>


    
    <section
      className='bg-[url("https://pinnacle-khaki.vercel.app/mediaFiles/Home%20page/Counter%20number/Hero%20section%20and%20logos/Frame%202095586641%201.webp")] bg-cover bg-center h-screen w-full'
      >
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl text-white text-center">
          Live Above It All — The Pinnacle by <br />
          STJ Group, Mohali
        </h1>

        <p className="text-white text-center">
          Standing tall at 36 floors, The Pinnacle offers panoramic views,
          futuristic engineering, and an elite lifestyle in the heart of
          Mohali booming urban landscape.
        </p>

        <button className="bg-white p-3"
            onClick={handleEnquireOpen}
            >
          Enquire Now
        </button>
      </div>
    </section>
          </>
  );
}


