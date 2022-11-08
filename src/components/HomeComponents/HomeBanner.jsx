import React,{useEffect, useRef} from 'react'
import HomeBannerVector from '../../assets/img/home-bg-vectors.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

const HomeBanner = () => {
     // animations ref
     const rightmain = useRef()
     const leftmain= useRef()
 
     useEffect(() => {
         let tl = gsap.timeline()
         tl.fromTo(leftmain.current, { x: "-100px", opacity: '0' }, {
             x: "0%",
             delay: 0.05,
             opacity: '1'
         }, '<')
             .fromTo(rightmain.current, { x: "100px", opacity: '0' }, {
                 x: "0%",
                 delay: 0.05,
                 opacity: '1'
             }, '<')
     });
  return (
    <main className='home-main'>
      <div className="home-main-container">
        <div className="home-main-container-left" ref={leftmain}>
          <div className="home-main-container-left-heading">
            <h1>Etİbarlı ödənİşlər bİr ünvanda!</h1>
          </div>

          <div className="home-main-container-left-desc">
            <h2>3000-dən artıq ödənİş termİnalımız və İstİfadəçİ dostu İnterfeysİmİzlə 7/24 xİdmətİnİzdəyİk!</h2>
          </div>

          <div className="home-main-container-left-btn">
            <button><Link to={'/about'}>Daha Ətraflı</Link></button>
          </div>
        </div>

        <div className="home-main-container-right" ref={rightmain}>
          <img src={HomeBannerVector} alt="" loading="lazy"/>
        </div>
      </div>
    </main>
  )
}

export default HomeBanner