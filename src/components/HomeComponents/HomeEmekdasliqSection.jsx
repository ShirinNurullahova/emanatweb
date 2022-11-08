import React, { useEffect, useRef } from 'react'
import MainImage from '../../assets/img/home-emek-main.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import kapital from '../../assets/img/kapital.png'
import rabite from '../../assets/img/rabite.png'
import abb from '../../assets/img/abb.png'
import atb from '../../assets/img/atb.png'
import turan from '../../assets/img/turan.png'
import leo from '../../assets/img/leo.png'
import bankof from '../../assets/img/bankof.png'
import yelo from '../../assets/img/yelo.png'
import access from '../../assets/img/access.png'
import asb from '../../assets/img/asb.png'
import azer from '../../assets/img/azer.png'
import azeriqaz from '../../assets/img/azeriqaz.png'
import uni from '../../assets/img/uni.png'
import xalq from '../../assets/img/xalq.png'
import yapi from '../../assets/img/yapi.png'
import bb from '../../assets/img/bb.png'
import azerisiq from '../../assets/img/azerisiq.png'
import azersu from '../../assets/img/azersu.png'
import bakcell from '../../assets/img/bakcell.png'
import pasha from '../../assets/img/pasha.png'
import nar from '../../assets/img/nar.png'


import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const HomeEmekdasliqSection = () => {
    const homeRef = useRef()
    const mainRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(imgRef.current, {
            x: -100,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                start: '-400',
                end: "+=400",
                trigger: homeRef.current,
                scrub: true,

            },
        })
            .from(mainRef.current, {
                x: 500,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    start: '-400',
                    end: "+=400",
                    trigger: homeRef.current,
                    scrub: true,

                },
            })
    }, []);
    return (
        <section className='home-emekdasliq' ref={homeRef}>
            <div ref={imgRef} className="home-emekdasliq-image">
                <img src={MainImage} alt="" loading="lazy"/>
            </div>

            <div ref={mainRef} className="home-emekdasliq-main">
                <div className="home-emekdasliq-main-heading">
                    <p><span>eManat</span> ilə əməkdaşlıq</p>
                </div>

                <div className="home-emekdasliq-main-container">
                    <div className="home-emekdasliq-main-container-description">
                        <p>Ödəniş etdiyiniz anda provayder ödəniş barəsində məlumat alacaq və məbləğ dərhal balansınıza köçürüləcək.</p>
                    </div>

                    <div className="home-emekdasliq-main-container-btn">
                        <button>Kəşf et</button>
                    </div>
                </div>

                <div className="home-emekdasliq-main-slider">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 800,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={3}
                        slidesPerColumn={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src={kapital} loading="lazy"/>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
           
                            <img src={rabite} loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={abb} loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src={atb} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={turan} alt="" loading="lazy" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={leo} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={bankof} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={yelo} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={access} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={asb} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={azer} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={azeriqaz} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={uni} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={xalq} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={yapi} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={bb} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={azerisiq} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={azersu} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={bakcell} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={pasha} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                            <img src={nar} alt="" loading="lazy"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeEmekdasliqSection