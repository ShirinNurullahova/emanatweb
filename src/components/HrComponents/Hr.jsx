import React, { useEffect } from 'react'
import '../HrComponents/Hr.scss'
import vector from '../../assets/img/shirin/Vector.png'
import adam from '../../assets/img/shirin/adam.png'
import logo from '../../assets/img/shirin/logo.png'
import dots from '../../assets/img/shirin/dots.png'
import azer from '../../assets/img/azer.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
const Hr = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.display = "none";
        console.log(document.getElementsByTagName("footer")[0].style.display = "none")

    }, [])
    return (
        <div className='hr_main'>
            <div className='hr_main_left'>
                <div className='hr_main_left_element'>
                    <div className='hr_main_left_element_up'>
                        <img src={logo} loading="lazy" />
                    </div>
                    

                </div>
                <div className="hr_main_left_slider">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 800,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        slidesPerColumn={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hr_main_left-slider-div">
                                <img src={adam} loading="lazy"/>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className='hr_main_right'>
                <form className='hr_main_right_form'>
                    <div className="hr_main_right_form_element">
                        <label>Ad</label>
                        <input type="ad" placeholder='Ad' name="" id="" />
                    </div>
                    <div className="hr_main_right_form_element">
                        <label>Soyad</label>
                        <input type="soyad" placeholder='Soyad' name="" id="" />
                    </div>
                    <div className="hr_main_right_form_element">
                        <label>Nömrə</label>
                        <input type="nömrə" placeholder='+994' name="" id="" />
                    </div>
                    <div className="hr_main_right_form_element">
                        <label>E-poçt</label>
                        <input type="epoçt" placeholder='user@mailcom' name="" id="" />
                    </div>
                    <div className="hr_main_right_form_element">
                        <p className='load'>Cv-nizi yükləyin</p>
                        <label className='lb'>Cv
                            <div className='vector'>
                                <img src={vector} />
                            </div>
                            <input className='cv' type="file" />
                        </label>



                    </div>
                </form>
                <div className='hr_main_right_btn'>
                    <button>Göndər</button>
                </div>
            </div>
        </div>
    )
}

export default Hr