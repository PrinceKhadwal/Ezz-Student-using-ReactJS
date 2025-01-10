import React from 'react';

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
    const handleScroll = (sectionId) =>{
        if(isOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({behavior :"smooth"})
    }

    return (
        <div className="w-screen fixed top-0 z-20">
            <div className='w-1/2 h-screen flex flex-col p-8 bg-blue-600 text-white'>
                <ul className='space-y-5'>
                    <li>
                        <a className='menu-item cursor-pointer' onClick={() => handleScroll('home')}>Home</a>
                    </li>
                    <li>
                        <a className='menu-item cursor-pointer' onClick={() => handleScroll('curriculum')}>Curriculum</a>
                    </li>
                    <li>
                        <a className='menu-item cursor-pointer' onClick={() => handleScroll('papers')}>Que. Papers</a>
                    </li>
                    <li>
                        <a className='menu-item cursor-pointer' onClick={() => handleScroll('aboutus')}>About us</a>
                    </li>
                </ul>
                <button
                    className='mt-auto h-10 bg-white border border-black text-black text-xs md:text-sm px-6 rounded hover:bg-blue-50 hover:font-bold'
                    onClick={() => handleScroll('contactus')}
                >
                    Contact us
                </button>
            </div>
            <div onClick={() => setIsMenuOpen(false)} className='w-screen h-screen bg-overlayBg fixed top-0 left-0' />
        </div>
    );
};

export default MobileNavbar;