import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/autoplay'

const HomeNews = () => {
    return (
        <section className='home-news-section'>
            <div className="home-news-section-heading">
                <div className="home-news-section-heading-text">
                    <p>en son xeberler</p>
                </div>

                <div className="home-news-section-heading-button">
                    <a>Hamsısına Bax</a>
                </div>
            </div>

            <div className="home-news-section-container">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 900,
                        disableOnInteraction: true,
                    }}
                    slidesPerView={3}
                    slidesPerColumn={2}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1605615052.Modenis-Banner-Nov-02.jpg" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1594796866.Modenis-Banner-Jul-1bnk.jpg" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1651153551.cover.png" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1605615052.Modenis-Banner-Nov-02.jpg" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1594796866.Modenis-Banner-Jul-1bnk.jpg" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-news-section-container-card">
                            <div className="home-news-section-container-card-heading">
                                <p>Lacus mattis aliquam.</p>
                            </div>

                            <div className="home-news-section-container-card-image">
                                <img loading="lazy" src="https://www.modenis.az/public/block/1651153551.cover.png" alt="" />
                            </div>

                            <div className="home-news-section-container-card-description">
                                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
                            </div>

                            <div className="home-news-section-container-card-bottom">
                                <div className="home-news-section-container-card-bottom-date">
                                    <p>11.07.22</p>
                                </div>

                                <div className="home-news-section-container-card-bottom-button">
                                    <a>Ətraflı</a>
                                    <span>&#8599;</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default HomeNews