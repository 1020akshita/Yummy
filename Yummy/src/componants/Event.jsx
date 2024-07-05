import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Event = () => {
  const testimonialData = [
    { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita! Mollitia maxime inventore, repellat exercitationem eligendi quibusdam molestiae nam quos impedit, explicabo nihil ratione tenetur atque eos autem dignissimos rerum?", name: "Shivam", profession: "Coder", image: "https://img.freepik.com/free-photo/smiling-young-man-posing-garden_23-2147562343.jpg?t=st=1719649169~exp=1719652769~hmac=d53766d84849c5fc5b0d3ce0172293301451c0e19d916d1871bcc6134ed789a0&w=360" },
    { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita! Mollitia maxime inventore, repellat exercitationem eligendi quibusdam molestiae nam quos impedit, explicabo nihil ratione tenetur atque eos autem dignissimos rerum?", name: "Shivani", profession: "Dancer", image: "https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16058.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
    { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita! Mollitia maxime inventore, repellat exercitationem eligendi quibusdam molestiae nam quos impedit, explicabo nihil ratione tenetur atque eos autem dignissimos rerum?", name: "Riya", profession: "Singer", image: "https://img.freepik.com/free-photo/portrait-beautiful-woman-nature_23-2148523890.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user" },
    { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita! Mollitia maxime inventore, repellat exercitationem eligendi quibusdam molestiae nam quos impedit, explicabo nihil ratione tenetur atque eos autem dignissimos rerum?", name: "Rajeev", profession: "Businessman", image: "https://img.freepik.com/free-photo/portrait-happy-indian-businessman-standing-boardroom_231208-2564.jpg?t=st=1719649312~exp=1719652912~hmac=fb0809b19f8c6e726b1e47347baf352f4f41d89e317dca3104585f0570fafcd3&w=1060" },
  ]

  const galleryData = [
    { bgImg: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?=st=1719825479~exp=1719829079~hmac=403d8b720ee43350ed62d1e44fcce9fb928ba9b51396bfcf81e381e1c14b31e2&w=740", name: "Birthday Parties", rate: "$499", des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci impedit quam itaque molestiae debitis at delectus quaerat omnis ipsam. Nostrum!" },
    { bgImg: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?ga=GA1.1.1737472454.1692161975&semt=ais_user", name: "Wedding", rate: "$569", des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci impedit quam itaque molestiae debitis at delectus quaerat omnis ipsam. Nostrum!" },
    { bgImg: "https://img.freepik.com/premium-photo/delicious-kofta-nuggets-chicken-cutlets-with-fresh-salad-white-background-created-with-generative-ai-technology_27525-29604.jpg?w=740", name: "Event", rate: "$229", des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci impedit quam itaque molestiae debitis at delectus quaerat omnis ipsam. Nostrum!" },
    { bgImg: "https://img.freepik.com/premium-photo/south-african-fast-food-dish-bunny-chow-curry-with-meat-vegetables-white-bread-light-background_781325-6146.jpg?w=740", name: "Good News", rate: "$399", des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci impedit quam itaque molestiae debitis at delectus quaerat omnis ipsam. Nostrum!" }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    Transition: 1,    
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
      <div className=' h-fit w-full mt-20 '>

        <div className='max-screen-w-xl mx-auto w-1/2 flex justify-center p-5 mb-10 md:mb-20'>
          <div>
            <h1 className='text-sm md:text-xl text-center text-[#909EB3] mb-4'>TESTIMONIALS</h1>
            <h1 className='text-2xl md:text-4xl text-center text-[#37373F]'>What Are They <span className='text-[#CE1212]'>Saying About Us </span></h1>
          </div>

        </div>
      </div>
      <div className='max-screen-w-xl mx-auto md:w-3/4'>
        <Slider {...settings}>
          {testimonialData.map((testi, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-12 p-10 '>
              <div className='col-span-8 mb-15 gap-5 border-l-2 border-[#CE1212] px-7' >
                <p className='text-[#25292D] italic mb-5 '><i className="ri-double-quotes-l pr-2 text-2xl text-[#CE1212]"></i>{testi.desc}<i className="ri-double-quotes-r text-2xl text-[#CE1212] p-2"></i></p>
                <h1 className='text-xl text-[#5F5F65] mb-3'>{testi.name}</h1>
                <h1 className='text-xl text-[#CE1212] mb-3'>{testi.profession}</h1>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
              </div>
              <div className='col-span-4 flex justify-center items-center p-2'>
                <img className='h-60 w-60 object-cover rounded-full' src={testi.image} alt={testi.name} />
              </div>
            </div>
          ))}
        </Slider >
      </div>

      <div className='gallery'>
        <div className='h-full w-full'>
          <Slider {...settings2}>
            {galleryData.map((gallery, index) => (
              <div key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                <div className='bg-red-500 flex flex-col justify-center items-center mt-40 p-10 grow1 bg-cover bg-no-repeat opacity-85 text-white' style={{ backgroundImage: `url(${gallery.bgImg})` }}>
                  <h1 className='text-3xl mt-96 mb-5'>{gallery.name}</h1>
                  <h1 className='border-b-4 border-red-700 text-4xl mb-5 font-bold'>{gallery.rate}</h1>
                  <p className='text-xl'>{gallery.des}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Event
