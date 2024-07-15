import React, { useState } from 'react'


const Footer = () => {

    const FooterData = [
        { icon: <i class="ri-map-pin-line"></i>, name: "Address", des: "A108 Adam Street, New York, NY 535022" },
        { icon: <i class="ri-phone-line"></i>, name: "Contact", des: "+1 5589 55488 55" },
        { icon: <i class="ri-time-line"></i>, name: "Opening Hours", des: "Mon-Sat: 11AM - 23PM; Sunday: Closed" },

    ];

    const icon = [
        { footerIcon: <i class="ri-twitter-x-line"></i> },
        { footerIcon: <i class="ri-facebook-circle-fill"></i> },
        { footerIcon: <i class="ri-instagram-line"></i> },
        { footerIcon: <i class="ri-linkedin-box-fill"></i> },
    ];

    const [FooterRealData, setFooterRealData] = useState(FooterData);
    const [footerIcon, setFooterIcon] = useState(icon);
    return (
        <>
            <div className=' bg-[#1F1F24] mt-10 md:mt-20 flex justify-center items-center text-white p-5  '>
                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10  gap-3 border-b-2 border-slate-700'>

                    {FooterRealData.map((footer, index) => (
                        <div key={index} className=' max-w-xl mx-auto w-full mt-5'>
                            <div className=' flex justify-start   gap-3 p-3   '>
                                <div className=' flex  justify-center items-center rounded-full text-3xl text-red-700   p-1'>{footer.icon}</div>

                                <div>
                                    <h1 className='text-md  font-bold text-[#66696B]'>{footer.name}</h1>
                                    <p className='text-white text-sm'>{footer.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className=' flex  flex-col justify-center  '>
                        <div>
                            <h1 className='text-md font-semibold text-[#66696B] flex justify-center items-center p-3'>Follows Us</h1>
                        </div>

                        <div className='flex justify-center items-center gap-3   '>

                            {footerIcon.map((Ficon, index) => (
                                <div key={index} className='flex justify-center items-center  '>
                                    <p className=' h-10 w-10 flex  justify-center items-center  text-sm text-slate-400 hover:text-red-700 transition duration-700 border-2 border-slate-400 hover:border-red-700 rounded-full  p-1'> {Ficon.footerIcon}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1F1F24] p-3 '>
                <h1 className='text-white flex justify-center items-center'>@copyright <span className='font-bold'> Yummy </span> All   Rights Reserved</h1>
                <p className='flex justify-center items-center text-white'>Designed by <span className='text-red-700 font-bold ml-2 mt-2'>TailwindCss</span></p>
            </div>
        </>
    )
}

export default Footer
