"use client";
import React from 'react';

const BackToTopBtn = () => {
    return (
        <div
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#C0B596] text-white flex items-center justify-center cursor-pointer hover:bg-gray-700 transition duration-300"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
            </svg>
        </div>
    );
};

export default BackToTopBtn;
