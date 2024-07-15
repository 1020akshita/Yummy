import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const gallery = [
        { image: "https://img.freepik.com/free-photo/pretty-women-celebrating-having-party_23-2147651785.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/group-friends-dining-out_23-2149187235.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/happy-people-having-party-kitchen_23-2147651771.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/people-enjoying-mexican-barbecue_23-2151000348.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/diverse-ethnic-friendship-party-leisure-happiness-concept_53876-42765.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/medium-shot-friends-with-beer-pub_23-2148872452.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
        { image: "https://img.freepik.com/free-photo/girl-guy-halloween-party_23-2147685695.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        Transition: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]

    };
    return (
        <>
            <div className='gallery'>
                <div className='h-full w-full mt-20'>
                    <div className='max-screen-w-xl mx-auto w-1/2 flex justify-center p-5 mb-10 md:mb-20'>
                        <div>
                            <h1 className='text-sm md:text-xl text-center text-[#909EB3] mb-4'>GALLERY</h1>
                            <h1 className='text-2xl md:text-4xl text-center text-[#37373F]'>Check <span className='text-[#CE1212]'>Our Gallery</span></h1>
                        </div>

                    </div>
                    <Slider {...settings}>
                        {gallery.map((galleryImg, index) => (
                            <div key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2'>
                                <div className=' flex flex-col justify-center items-center  p-2 opacity-85 text-white border-4 hover:border-red-700' >
                                    <img src={galleryImg.image} alt="" />

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>



        </>
    )
}

export default Gallery
