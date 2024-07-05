import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import food1 from '../assets/food1.png'

const Home = () => {
    const homeRef = useRef()
    useGSAP(() => {
        gsap.to(".home", {
            y: -20,
            repeat: -1,
            yoyo: true,
            delay: 0.5,
            duration: 2
        })
    })


    return (
        <div className=' bg-[#F2F2F2] max-screen-w-xl mx-auto h-fit px-5 flex flex-wrap '>
            <div className=" basis-full lg:basis-1/2 mt-5 flex justify-center items-center gap-3 ">
                <img ref={homeRef} className='home basis-1/3 ' src={food1} alt="" />
            </div>


            <div className=' flex justify-center items-center  lg:basis-1/2 '>
                <div className="  py-1 px-3 ">
                    <h1 className='text-2xl text-slate-700 font-mono tracking-tight mb-2 md:text-4xl lg:text-6xl  ' >
                        Enjoy Your Healthy<br />
                        Delicious Food
                    </h1>
                    <p className='text-sm md:text-xl text-slate-500 mb-5'>
                        We are team of talented designers making websites with Bootstrap
                    </p>
                    <div className="vediobtn flex  items-center gap-3">
                        <button className=' bg-[#CE1212]   hover:bg-[rgb(204,18,52)] text-white lg:text-sm px-5 py-2 rounded-full lg:py-3 lg:px-4 hover:text-slate-100 '> Book a Table </button>

                        <div className='gap-3  px-3 flex justify-center items-center'>
                            <i class="ri-play-circle-line text-3xl text-[#CE1212] font-light"></i>
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ">
                                Watch Video</a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home
