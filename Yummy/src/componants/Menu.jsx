import React from 'react'


const Menu = () => {
   
    const data = [
        { image: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1719387852~exp=1719391452~hmac=67b2b9246c97de5a5c65d82c08a133e5b35367c592b206bbd86a811b060d4767&w=740", name: "Magnam Tiste", des: " Lorem, deren, trataro, filede, nerada", rate: "$5.95" },


        { image: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76797.jpg?w=360", name: "Aut Luia", des: "  Lorem, deren, trataro, filede, nerada", rate: "$14.95" },


        { image: "https://img.freepik.com/premium-photo/indian-chicken-tikka-kebabs-marinated-spices-yogurt-roasted-tandoor_466689-46692.jpg?ga=GA1.1.1737472454.1692161975&semt=sph", name: "Est Eligendi", des: " Lorem, deren, trataro, filede, nerada", rate: "$8.95" },


        { image: "https://img.freepik.com/premium-photo/dal-makhani-daal-makhni-is-popular-food-from-punjab-india-made-using-whole-black-lentil-red-kidney-beans-butter-cream-served-with-garlic-naan-indian-bread-roti_466689-21979.jpg?ga=GA1.1.1737472454.1692161975&semt=sph", name: "Eos Luibusdam", des: " Lorem, deren, trataro, filede, nerada", rate: "$18.95" },

        { image: "https://img.freepik.com/free-photo/salad-with-lettuce-meat-sesame-seeds-sauce_141793-1254.jpg?ga=GA1.1.1737472454.1692161975&semt=sph", name: "soso Luibusdam", des: " Lorem, deren, trataro, filede, nerada", rate: "$28.95" },


        { image: "https://img.freepik.com/premium-photo/assorted-indian-non-vegetarian-food-recipe-served-group-includes-chicken-curry-mutton-masala-anda-egg-curry-butter-chicken-biryani-tandoori-murg-chicken-tikka-naa-roti-ramadan_466689-40941.jpg?ga=GA1.1.1737472454.1692161975&semt=sph", name: "Laboriosam Direva", des: " Lorem, deren, trataro, filede, nerada", rate: "$19.95" },

    ]
    return (
        <>
            <div className=''>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className=' mb-5 text-lg'>Our Menu</h4>
                    <h1 className=' text-3xl  md:text-4xl uppercase'>Check Our <span className='text-[#CD1212]'>Yummy Menu</span></h1>
                </div>
                <div className=' flex justify-center items-center gap-5 mt-8 mb-12 text-lg  lg:text-xl text-[#37435D] '>
                    <div className='border-b-2 mt-3 border-[#D2D3D4] hover:border-[#CE1212] transition-colors duration-500 px-3 py-2'>Starters</div>
                    <div className='border-b-2 mt-3 border-[#D2D3D4] hover:border-[#CE1212] transition-colors duration-500 px-3 py-2'>Breakfast</div>
                    <div className='border-b-2 mt-3 border-[#D2D3D4] hover:border-[#CE1212] transition-colors duration-500 px-3 py-2' >Lunch</div>
                    <div className='border-b-2 mt-3 border-[#D2D3D4] hover:border-[#CE1212] transition-colors duration-500 px-3 py-2'>Dinner</div>
                </div>

                <div className=' flex flex-col justify-center items-center  uppercase'>
                    <h1 className=' text-xl'>Menu</h1>
                    <h1 className=' text-3xl   lg:text-4xl mt-3 text-[#CE1212]'>Dinner</h1>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 p-5 gap-12 text-[#37373F]'>

                    {data.map((elem, index) => (
                        <div className='flex flex-col justify-center items-center'>
                            <img className='h-96 w-80 object-cover mb-3' src={elem.image} alt="" />
                            <h1 className='text-xl  md:text-2xl mb-2'>{elem.name}</h1>
                            <p className='text-lg lg:text-xl'>{elem.des}</p>
                            <h2 className='text-3xl text-[#CE1212] font-semibold'>{elem.rate}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu;
