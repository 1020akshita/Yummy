import React, { useRef, useState } from 'react'

const Contact = () => {

    const [val, setVal] = useState({ name: "", email: "", subject: "", message: "" })

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(val)
    };

    const mapData = [
        { icon: <i class="ri-map-pin-line"></i>, name: "Location", add: "A108 Adam Street, New York, NY 535022" },
        { icon: <i class="ri-phone-line"></i>, name: "Call Us", add: "+1 5589 55488 55" },
        { icon: <i class="ri-mail-line"></i>, name: "Email Us", add: "info@example.com" },
        { icon: <i class="ri-time-line"></i>, name: "Opening Hours", add: "Mon-Sat: 11AM - 23PM; Sunday: Closed" },
    ];
    const [realData, setRealData] = useState(mapData);

    const RoomBook = () => {
        alert("hii");
    }

  
    return (
        <>
            <div className='gallery'>
                <div className='max-screen-w-xl mx-auto h-fit  mt-20'>
                    <div className='max-screen-w-xl mx-auto w-1/2 flex justify-center mb-10 md:mb-20 p-5'>
                        <div>
                            <h1 className='text-sm md:text-xl text-center text-[#909EB3] mb-4'>CONTACT</h1>
                            <h1 className='text-2xl md:text-4xl text-center text-[#37373F]'>Need Help? <span className='text-[#CE1212]'>Contact Us</span></h1>
                        </div>

                    </div>
                    <div className=' flex  justify-center items-center  p-2 opacity-85 text-white mb-10' >
                        <iframe width="92%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=157%20William%20St,%20New%20York,%20NY%2010038,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>

                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 px-10  gap-5'>
                        {mapData.map((mapData2, index) => (
                            <div className=' max-w-xl mx-auto w-full mt-5'>
                                <div className=' flex justify-start  items-center gap-3 p-3 bg-[#FFFFFF]  shadow-sm shadow-slate-600 '>

                                    <div className=' flex  justify-center items-center rounded-full text-3xl text-white bg-red-700  p-1'>
                                        {mapData2.icon}
                                    </div>

                                    <div>
                                        <h1 className='text-xl font-semibold text-[#66696B]'>{mapData2.name}</h1>
                                        <p>{mapData2.add}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <form action="" onSubmit={handelSubmit}>
                        <div className=' gap-4 px-5 lg:px-10 py-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>

                                <div className=' max-w-xl mx-auto w-full mt-5' >
                                    <input className='w-full  p-2 border border-gray-300 rounded' type="text" onChange={(event) => setVal({ ...val, name: event.target.value })} placeholder='Username' />
                                </div>

                                <div className=' max-w-xl mx-auto w-full mt-5 mb-5' >
                                    <input className='w-full  p-2 border border-gray-300 rounded' onChange={(event) => setVal({ ...val, email: event.target.value })} type="email" placeholder='Useremail' />
                                </div>

                            </div>
                            <div className=' mx-auto container '>
                                <div className='  w-full  mt-5'>
                                    <input type='text' onChange={(event) => setVal({ ...val, subject: event.target.value })} placeholder='Subject' className='p-2 border border-gray-300 rounded  w-full' /></div>

                                <div className='w-full  mt-10'>
                                    <textarea placeholder='Message' onChange={(event) => setVal({ ...val, message: event.target.value })} className=' p-2 border border-gray-300 rounded h-32 w-full'></textarea>
                                </div>
                                <div className='flex justify-center items-center mt-5'>
                                    <input onClick={() => RoomBook()} className=' bg-[#CE1212]  px-5  py-2 rounded-full  hover:bg-[rgb(204,18,52)] text-white lg:text-sm lg:py-3 lg:px-4 hover:text-slate-100 active:scale-105' type='submit'/>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact
