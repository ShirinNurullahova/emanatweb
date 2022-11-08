import React, { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss';
import group7 from '../../../assets/img/group-7.jpg'
import { gsap } from 'gsap';
import one from '../../../assets/img/shirin/1.png'
import two from '../../../assets/img/shirin/2.png'
import three from '../../../assets/img/shirin/3.png'
import four from '../../../assets/img/shirin/4.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tag from '../Tag/Tag';
gsap.registerPlugin(ScrollTrigger)


const Footer = () => {
  const imgRef = useRef()
  const bottomRef = useRef()
  const footerRef = useRef()
  // useEffect(() => {
  //   let tl = gsap.timeline()
  //   tl.from(bottomRef.current, {
  //     x: -100,
  //     opacity: 0,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       start:'-400',
  //       end: "+=400",
  //       trigger: footerRef.current,
  //       scrub: true,

  //     },
  //   })
  //   .from(imgRef.current, {
  //       x: 500,
  //       opacity: 0,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         start:'-400',
  //         end: "+=400",
  //         trigger: footerRef.current,
  //         scrub: true,

  //       },
  //     })
  // }, []);
  return (
    <Fragment>
      <footer className='footer' ref={footerRef}>
        <img ref={imgRef} className='footer-img' src={group7} loading="lazy" />
        <div className='footer-bottom' ref={bottomRef}>

          <div className='footer-bottom-up'>
            <div className='footer-bottom-up-el'>
              <h1>emekdasliq</h1>
              <p>Biznes</p>
              <p>Terminal Qurasdirilmasi</p>
              <p>Marketinq</p>

            </div>
            <div className='footer-bottom-up-el'>
              <h1>contact</h1>
              <p>0124044888</p>
              <p>contact@emanat.az</p>
            </div>
            <div className='footer-bottom-up-el'>
              <h1>social media</h1>
              <div className='footer-bottom-up-el_div'>
                <div className='footer-bottom-up-el_div_img'>
                  <img src={one}/>
                </div>
                <div>
                  <p>facebook</p>
                </div>
              </div>
              <div className='footer-bottom-up-el_div'>
              <div className='footer-bottom-up-el_div_img'>
                  <img src={two}/>
                </div>
                <div>
                  <p>instagram</p>
                </div>
              </div>
              <div className='footer-bottom-up-el_div'>
              <div className='footer-bottom-up-el_div_img'>
                  <img src={three}/>
                </div>
                <div>
                  <p>linkedin</p>
                </div>
              </div>
              <div className='footer-bottom-up-el_div'>
              <div className='footer-bottom-up-el_div_img'>
                  <img src={four}/>
                </div>
                <div>
                  <p>youtube</p>
                </div>
              </div>
             

            </div>

          </div>
          <hr />

          <div className='footer-bottom-two'>
            <div className='footer-bottom-two-el'>
              <h1>karyera</h1>
              <p>Vakansiya</p>
              <p className='footer-bottom-two-el-b'>Onlayn muraciet</p>
              <p>Proqramlar</p>
            </div>
            <div className='footer-bottom-two-el'>
              <h1>diger</h1>
              <p><Link to={'/faq'}>FAQ</Link></p>
              <p className='footer-bottom-two-el-m'><Link to={'/coorperative'}>Sosial Korporativ Məsuliyyət</Link></p>
              <p className='footer-bottom-two-el-m'>Terminaldan istifade qaydasi</p>
              <p className='footer-bottom-two-el-m'> Terminal xeritesi</p>

            </div>
          </div>
          <hr className='second' />


        </div>
      </footer>
    </Fragment>
  )
}

export default Footer