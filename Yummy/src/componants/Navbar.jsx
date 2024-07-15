import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoImg from '../assets/logoImg.png';

const Navbar = () => {
    const navRef = useRef();

    useGSAP(() => {
        gsap.from(".nav", {
            opacity: 0,
            y: -20,
            duration: 1.5,
            delay: 0.5,
        });
    });

    const navigate = useNavigate();

    const bookTable = () => {
        navigate("/Chef");
    };

    return (
        <div className="max-screen-w-xl mx-auto h-fit flex justify-between items-center px-5 container header">
            <Link to="/">
                <img className='h-12 w-12 object-cover logo md:h-20 md:w-20 ' src={logoImg} alt="" />
            </Link>

            <div className="nav  max-sm:hidden sm:hidden md:hidden lg:flex lg:items-center lg:px-5 lg:py-3 lg:gap-12 lg:text-slate-800">
                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/"
                    ref={navRef}
                    className="nav-items custom-underline hover:text-[#CE1212]"
                >
                    Home
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/AboutUs"
                    className="nav nav-items custom-underline hover:text-[#CE1212]"
                >
                    About
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/Menu"
                    className="nav nav-items custom-underline hover:text-[#CE1212]"
                >
                    Menu
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/Event"
                    className="nav nav-items custom-underline hover:text-[#CE1212]"
                >
                    Events
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/Chef"
                    className="nav nav-items custom-underline hover:text-[#CE1212]"
                >
                    Chefs
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/Gallery"
                    className="nav nav-items custom-underline hover:text-[#CE1212]"
                >
                    Gallery
                </Link>

                <Link
                    activeClassName="font-bold text-[#CE1212]"
                    to="/Contact"
                    className="navs nav-items custom-underline hover:text-[#CE1212]"
                >
                    Contact
                </Link>
            </div>

            <div>
                <button
                    onClick={bookTable}
                    className='bg-[#CE1212] px-5 py-2 rounded-full hover:bg-[rgb(204,18,52)] text-white lg:text-sm lg:py-3 lg:px-4 hover:text-slate-100 active:scale-105'
                >
                    Book a Table
                </button>
                <i className="ri-menu-line text-3xl ml-8 text-slate-400 lg:hidden"></i>
            </div>
        </div>
    );
};

export default Navbar;
