import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstslide from "../assets/first_slide.jpg"
import secondslide from "../assets/second_slide.jpg"
import thirdslide from "../assets/third_slide.jpg"

function Login() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <div className=''>
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <div className="">
                            <Slider {...settings}>
                                <div className='p-3'>
                                    <div className='backgroundimg' style={{
                                        backgroundImage: `url(${firstslide})`
                                    }}>
                                        <div className='slider-img'>
                                            <div className='imgtext'>
                                                <h2 className='text-xl font-black'>Accessibility Reminder</h2>
                                                <p>Access Your HR Tools Anytime, Anywhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <div className='backgroundimg' style={{ backgroundImage: `url(${secondslide})` }}>
                                        <div className='slider-img'>
                                            <div className='imgtext'>
                                                <h2 className='text-xl font-black'>Progressive Vision</h2>
                                                <p>Transforming HR Practices for a Brighter Future</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <div className='backgroundimg' style={{ backgroundImage: `url(${thirdslide})` }}>
                                        <div className='slider-img'>
                                            <div className='imgtext'>
                                                <h2 className='text-xl font-black'>Security Assurance</h2>
                                                <p >Your Data, Our Priority. Trust in Secure HR Solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                    <div class="...">05</div>
               

            </div>


        </div>
        </div >
    )
}

export default Login