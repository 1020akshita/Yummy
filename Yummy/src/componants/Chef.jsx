import React, { useState } from 'react'

const Chef = () => {

    const ChefData = [
        { img: "https://img.freepik.com/free-photo/chef-holding-pan-with-fire-inside_144627-16644.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user", name: "Oliver", proff: "Master Chef", dess: "Beatae enim architecto ab numquam atque expedita sequi quia odit quasi recusandae similique sit ad, esse, velit, quas soluta quo quaerat laborum" },
        { img: "https://img.freepik.com/premium-photo/indian-chef-garnishing-dish-with-cilantro_198067-99776.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user", name: "Noah", proff: "Patissier", dess: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.!" },
        { img: "https://img.freepik.com/free-photo/expressive-young-man-posing-winter-holidays_140725-139113.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user", name: "Aiden", proff: "Cook", dess: " Beatae enim architecto ab numquam atque expedita sequi quia odit quasi recusandae similique sit ad, esse, velit, quas soluta quo quaerat laborum" },
    ];

    const [Chef, SetChef] = useState(ChefData);


    return (
        <>

            <div className=' h-fit w-full mt-20 '>

                <div className='max-screen-w-xl mx-auto w-1/2 flex justify-center p-5'>
                    <div>
                        <h1 className='text-sm md:text-xl text-center text-[#909EB3] mb-4'>CHEFS</h1>
                        <h1 className='text-2xl md:text-4xl text-center text-[#37373F]'>Our  <span className='text-[#CE1212]'>Proffesional Chefs</span></h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-20 gap-5 text-[#37373F]'>

                    {Chef.map((Chef, index) => (
                        <div className='flex flex-col items-center hover:scale-105  transition duration-700'>
                            <img className='h-96 w-full object-cover mb-3 ' src={Chef.img} alt="" />
                            <h1 className='text-3xl mt-2  font-bold'>{Chef.name}</h1>
                            <h1 className=' text-lg mb-3 '>{Chef.proff}</h1>
                            <p className='text-sm italic'>{Chef.dess}</p>
                        </div>
                    ))}
                </div>

                <div className='max-screen-w-xl mx-auto w-1/2 flex justify-center p-5 mt-20'>
                    <div>
                        <h1 className='text-sm md:text-xl text-center text-[#909EB3] mb-4'>BOOK A TABLE</h1>
                        <h1 className='text-2xl md:text-4xl text-center text-[#37373F]'>Book Your  <span className='text-[#CE1212]'>Stay With Us</span></h1>
                    </div>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3  md:mt-20  gap-5 text-[#37373F]'>
                    <div className='  '>
                        <img className='h-full w-full  object-cover  hover:scale-95  transition duration-700  overflow-hidden' src="https://img.freepik.com/free-photo/top-view-xsmas-background-with-dinner-plate-decoration-accessories-fir-branches-cutlery-set-red-napkin_140725-60402.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" alt="" />
                    </div>


                    <div className=' col-span-2'>
                        <div className=' py-2 bg-white rounded-lg shadow-lg'>
                            <form className=' gap-4 p-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='text' placeholder='Name' className='w-full  p-2 border border-gray-300 rounded' /></div>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='email' placeholder='Email' className='w-full  p-2 border border-gray-300 rounded' /></div>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='text' placeholder='Mobile No.' className='w-full p-2 border border-gray-300 rounded' /></div>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='date' placeholder='Date' className='w-full  p-2 border border-gray-300 rounded' /></div>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='time' placeholder='Time' className='w-full  p-2 border border-gray-300 rounded' /></div>
                                    <div className=' max-w-xl mx-auto w-full mt-5'><input type='number' placeholder='0' className='w-full  p-2 border border-gray-300 rounded' /></div>
                                </div>
                            </form>

                            <div className='w-full  px-4 mt-5'><textarea placeholder='Message' className=' p-2 border border-gray-300 rounded h-32 w-full'></textarea>
                            </div>
                            <div className='flex justify-center items-center mt-5'>
                                <button className=' bg-[#CE1212]  px-5  py-2 rounded-full  hover:bg-[rgb(204,18,52)] text-white lg:text-sm lg:py-3 lg:px-4 hover:text-slate-100 '>Book a Table</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Chef
