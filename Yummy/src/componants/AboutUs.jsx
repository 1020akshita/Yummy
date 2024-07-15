import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';





const AboutUs = () => {
    // useGSAP(() => {      
    //     gsap.to(".annim", {
    //         y: -40,
    //         delay: 0.5,
    //         duration: 0.5,
    //         stagger:0.2
    //     })

    // })


    const countData = [
        { counting: <CountUp className='text-4xl font-bold' start={0} end={232} duration={5} delay={0} />, countNo: "0", name: "Clients" },
        { counting: <CountUp className='text-4xl font-bold' start={300} end={521} duration={5} delay={0} />, countNo: "0", name: "Projects" },
        { counting: <CountUp className='text-4xl font-bold' start={1200} end={1453} duration={5} delay={0} />, countNo: "0", name: "Hours Of Support" },
        { counting: <CountUp className='text-4xl font-bold' start={0} end={32} duration={5} delay={0} />, countNo: "0", name: "Workers" },
    ];

    const AboutData = [
        { icon: <i className="ri-store-3-line text-4xl "></i>, name: " Ullamco laboris  ladore lore pan", des: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" },
        { icon: <i className="ri-align-item-bottom-line text-4xl "></i>, name: "Corporis voluptates officia eiusmod", des: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" },
        { icon: <i className="ri-vip-diamond-line text-4xl "></i>, name: "Ullamco laboris  ladore lore pan", des: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" },
    ]

    const [Count, setCount] = useState(countData);
    const [About, setAbout] = useState(AboutData);

    return (
        <>
            <div  className='  max-screen-w-xl mx-auto  h-fit  '>
                <div className='AboutUs-part-1 '>
                    <div className='flex items-center justify-center py-5 mt-5 mb-5'>
                        <h1 className='text-slate-700 '>ABOUT US</h1>
                    </div>
                    <div className='flex items-center justify-center text-3xl lg:text-4xl bg-stone-50 py-3'>
                        <h2>Learn More <span className='text-red-700'>About Us</span></h2>

                    </div>

                    <div className='flex  flex-wrap justify-center  h-fit  py-4 gap-10  '>
                        <div className='basis-full  lg:basis-7/12  ' >
                            <div >
                                <img className='' src="https://img.freepik.com/free-photo/terrace-restaurand-modern-style-summer_114579-2726.jpg?t=st=1719210136~exp=1719213736~hmac=47f88a3fedfb7ed7ecb96a5d579fea5fafe4c377f00184577b577a065754bd3f&w=1060" alt="" />

                            </div>
                            <div className=' p-5 mt-10 border-4 border-[#636668] flex flex-col justify-center items-center'>
                                <h1 className='text-[#37373F] text-2xl font-bold'> Book a Table</h1>
                                <h1 className='text-3xl text-[#CE1212] font-semibold'>+1 5589 55488 55</h1>
                            </div>

                        </div>
                        <div className=' w-full lg:w-4/12 p-2 text-basic   '>
                            <p className='italic text-base mb-5 text-[#9098AE]	'>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et  dolore magna aliqua.</p>

                            <ul className='mb-4'>
                                <div className='flex items-center gap-3'>
                                    <i className="ri-checkbox-circle-fill text-red-600 text-2xl font-semibold"></i>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <i className="ri-checkbox-circle-fill text-red-600 text-2xl font-semibold"></i>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <i className="ri-checkbox-circle-fill text-red-600 text-2xl font-semibold"></i>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </div>
                            </ul>

                            <p className='mb-12'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                            </p>

                            <div className='relative'>
                                <img src="https://img.freepik.com/free-photo/top-view-pakistani-food-arrangement_23-2148825109.jpg?t=st=1719216044~exp=1719219644~hmac=ac9ff1887c15da5feadd7356c553c8f971fefe4a2fc9da28118f2413ec14439b&w=996" alt="" />


                                <div className='bg-[#CE1212] absolute h-12 w-12 p-5 flex justify-center items-center rounded-full left-1/2 top-1/2 text-white'>
                                    <i className="ri-play-reverse-large-fill  "></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="AboutUs mt-20 mb-20">
                    <div className='bg-[#F2F2F2] w-full  px-5 py-10  '>
                        <div className='grid grid-cols-1  lg:grid-cols-5 gap-8 '>
                            <div className='bg-[#CE1212] lg:col-span-2 py-3 px-5'>
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-3xl text-white font-bold '>Why Choose Yummy</h1>
                                </div>
                                <p className='mt-4 text-white text-lg '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className='flex justify-center   mt-5'>
                                    <button className=' bg-[#D53535]   hover:bg-[white] text-white  px-12 py-3 rounded-full  hover:text-[#CE1212]  transition duration-500 flex justify-center items-center'> Learn More<i className="ri-arrow-right-s-line text-2xl "></i></button>
                                </div>
                            </div>

                            {About.map((elem, index) => (
                                <div key={index} className='flex flex-col justify-center items-center bg-white p-2'>
                                    <h1 className='p-3 text-red-700 hover:text-white bg-white hover:bg-red-500  transition duration-700 rounded-full'>{elem.icon}</h1>
                                    <h1 className='text-center text-xl text-[#43373F] font-semibold mb-5'>{elem.name}</h1>
                                    <p className='text-center text-sm text-[#666972]'>{elem.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='growing'>

                        <div className='h-full lg:h-96  w-full  bg-cover bg-fixed bg-no-repeat  bg-[url("https://img.freepik.com/free-photo/fresh-ingredients-pasta-preparation_23-2147849733.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_hybrid")]'>

                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-20 p-5 mt-20'>
                                {Count.map((counts, index) => (
                                    <div key={index} className=" flex flex-col justify-center  items-center mt-40 p-5  grow1 text-white">
                                        <div><h1>{counts.counting} </h1></div>
                                        <div className='flex  items-center text-center px-4'><p className='text-lg  mt-5 font-bold'>{counts.name}</p></div></div>
                                ))}
                            </div>
                        </div>

                    </div>



                </div>

            </div >
        </>

    )
}

export default AboutUs