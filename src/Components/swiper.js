import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay : true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    < div className="hidden sm:block">
    <Slider {...settings} className=' overflow-hidden relative hidden dark:bg-slate-900 bg-orange-200'>
      
      <div className="hidden" >
            <div className='Slider  w-screen flex justify-center items-center relative'>
                <img className='w-96' src="/images/hero-1.png " alt="" />
                <div className="bg-white w-full h-1/2 -z-30 absolute top-0 right-0"></div>
                <div className='w-full '>
                   <h1 className='w-full text-left text-6xl'> Womens Fashion Fastival </h1>
                   <p className='text-left'>Up to 60% off | Styles for Women</p>
                   {/* <button className="bg-indigo-500 text-white p-2 w-48 rounded-sm hover:bg-indigo-700">Explore</button> */}
                </div>
            </div>   
      </div> 
      <div className="" >
            <div className='Slider mt-4 w-full flex justify-center items-center'>
                <img className='w-96' src="/images/hero-electro.png " alt="" />
                <div className="bg-white w-full h-1/2 -z-30 absolute top-0 right-0"></div>
                <div className='w-full '>
                   <h1 className='w-full text-left text-6xl mr-8'>Letest Electronics</h1>
                   <p className='text-left'>Up to 30% off | Hurry Up</p>
                   {/* <button className="bg-indigo-500 text-white p-2 w-48 rounded-sm hover:bg-indigo-700">Explore</button> */}
                </div>
            </div>   
      </div>
      <div className="" >
            <div className='Slider  w-screen flex justify-center items-center'>
                <div className='w-full ml-24 '>
                   <h1 className='w-full text-left text-6xl'> Mens Fashion Fastival </h1>
                   <p className='text-left'>Up to 60% off | Styles for Women</p>
                   {/* <button className="bg-indigo-500 text-white p-2 w-48 rounded-sm hover:bg-indigo-700">Explore</button> */}
                </div>
                <img className='w-96 mr-10 ' src="/images/hero-men.png " alt="" />
                <div className="bg-white w-full h-1/2 -z-30 absolute top-0 right-0"></div>

            </div>   
      </div>
    </Slider>
    </div>
  );
}