import React ,  { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoImg from '../assets/logoImg.png'

const Navbar = () => {
    const navRef = useRef()
    useGSAP(()=>{
        gsap.from(".nav",{
            opacity:0,
            y:-20,          
            duration:1.5,
            delay:0.5,            
        })
    })
    return (
        <>
            <div  className=" max-screen-w-xl mx-auto h-fit  flex justify-between items-center px-5  container header">
                <a href="#">
                    <img className='h-12 w-12 object-cover logo md:h-20 md:w-20 ' src={logoImg} alt="" />
                </a>

                <div className="nav max-sm:hidden sm:hidden md:hidden lg:flex lg:items-center  lg:px-5 lg:py-3 lg:gap-12  lg:text-slate-800 ">
                    <a ref={navRef} href="#" className="nav-items custom-underline hover:text-[#CE1212]">Home</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">About</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Menu</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Events</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Chefs</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Gallery</a>                    
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Dropdown</a>
                    <a href="" className="nav-items custom-underline hover:text-[#CE1212]">Contact</a>
                </div>

                <div>
                    <button className=' bg-[#CE1212] px-5 py-2 rounded-full  hover:bg-[rgb(204,18,52)] text-white lg:text-sm lg:py-3 lg:px-4 hover:text-slate-100 '> Book a Table</button>
                    <i className="ri-menu-line text-3xl ml-8  text-slate-400 lg:hidden"></i>
                </div>

            </div>


        </>
    )
}

export default Navbar
