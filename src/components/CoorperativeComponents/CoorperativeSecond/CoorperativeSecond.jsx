import React, { Fragment } from 'react'
import ellipse from '../../../assets/img/shirin/Ellipse 39.png'
import kollektiv from '../../../assets/img/shirin/kollektiv.png'
import girl from '../../../assets/img/shirin/girl.png'

const CoorperativeSecond = () => {
    return (
        <Fragment>
            <div className='coorperative_second'>
                <div className='coorperative_second_left'>
                    <div className='coorperative_second_left_img'>
                        <img src={kollektiv} loading="lazy" />
                    </div>
                    <div className='coorperative_second_left_text'>
                        <p className='coorperative_second_left_text_head'>"Azərbaycanda Fintex Ekosistemi - bu gün və sabah" konfransında iştirakçı olduq</p>
                        <span className='coorperative_second_left_text_span'>
                            Üzvü olduğumuz Azerbaijan Fintech Association (Azfina)-nın təşkil etdiyi "Azərbaycanda Fintex Ekosistemi - bu gün və sabah" konfransında eManat şirkətinin İdarə Heyətinin üzvləri də ekosistemin inkişafı üzrə əldə olunan nailiyyətlər, onun gələcək inkişaf istiqamətləri və banklarla birgə əməkdaşlıqda tətbiq edilə biləcək innovativ həll və texnologiyalarla bağlı öz dəyərli fikirlərini iştirakçılarla bölüşmüşdür.
                        </span>
                        <div className="coorperative_second_left_btn">
                            <button>Kəşf et</button>
                        </div>
                    </div>

                </div>
                <div className='coorperative_second_left' id='right'>
                    <div className='coorperative_second_left_img'>
                        <img src={girl} loading="lazy" />
                    </div>
                    <div className='coorperative_second_left_text'>
                        <p className='coorperative_second_left_text_head'>"Azərbaycanda Fintex Ekosistemi - bu gün və sabah" konfransında iştirakçı olduq</p>
                        <span className='coorperative_second_left_text_span'>
                            Üzvü olduğumuz Azerbaijan Fintech Association (Azfina)-nın təşkil etdiyi "Azərbaycanda Fintex Ekosistemi - bu gün və sabah" konfransında eManat şirkətinin İdarə Heyətinin üzvləri də ekosistemin inkişafı üzrə əldə olunan nailiyyətlər, onun gələcək inkişaf istiqamətləri və banklarla birgə əməkdaşlıqda tətbiq edilə biləcək innovativ həll və texnologiyalarla bağlı öz dəyərli fikirlərini iştirakçılarla bölüşmüşdür.
                        </span>
                        <div className="coorperative_second_left_btn">
                            <button>Kəşf et</button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default CoorperativeSecond