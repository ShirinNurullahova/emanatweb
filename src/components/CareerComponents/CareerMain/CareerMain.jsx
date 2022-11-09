import React, { Fragment, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import humans from '../../../assets/img/shirin/humans.png';
import '../../CareerComponents/Career.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const CareerMain = () => {
    const termRef = useRef()
    const mainRef = useRef()

    // useEffect(() => {
    //     let tl = gsap.timeline()
    //     tl.fromTo(mainRef.current, { x: "-100px", opacity: '0' }, {
    //         x: "0%",
    //         delay: 0.05,
    //         opacity: '1'
    //     }, '<')
    //         .fromTo(termRef.current, { x: "100px", opacity: '0' }, {
    //             x: "0%",
    //             delay: 0.05,
    //             opacity: '1'
    //         }, '<')
    // });
    return (
        <Fragment>
            <div>
                <main className='career-main'>
                    <div className='career-main-one' ref={mainRef}>
                        <h1 className='career-main-one-h1'>
                            <span className='career-main-one-h1-span'> eMANAT KARYERA </span>
                            PLATFORMASINA XOŞ GƏLMİSİNİZ!
                        </h1>
                        <p className="career-main-one-p">
                            İş həyatını arzuladığın kİmİ yaşamaq üçün, elə İndİ bİzə qoşulun!
                        </p>
                        <Link to='/newVacancies'>
                        <div className="career-main-one-btn">
                            <button>Bizə qoşulun</button>
                        </div>
                        </Link>
                    </div>
                    <div className='career-main-img' ref={termRef}>
                        <img src={humans} loading="lazy"/>
                    </div>
                </main>
            </div>
        </Fragment>
    )
}

export default CareerMain