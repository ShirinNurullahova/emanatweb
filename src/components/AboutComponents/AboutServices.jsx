import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutServices = ({setHeight}) => {
    const containerRef = useRef()
    const textRef = useRef()
    const sectionRef = useRef()
    useEffect(() => {
        setHeight(containerRef.current.clientHeight * 2.5)
    }, []);
    return (
        <section className='about-services-section' ref={sectionRef}>
            <div className="about-services-section-heading" ref={textRef}>
                <p>Şirkətimiz öz istifadəçilərinə etibarlı və asan yolla aşağıdakı xidmətlərin ödənişlərini təklif edir</p>
            </div>

            <div id='about-services' ref={containerRef} className="about-services-section-container">
                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 22V24.544C8.798 25.234 8 26.514 8 28C8 30.022 9.504 31.676 11.452 31.944C13.736 37.896 18.49 42 24 42C29.51 42 34.264 37.896 36.548 31.944C38.496 31.676 40 30.022 40 28C40 26.514 39.202 25.234 38 24.544V22" stroke="#5B91C2" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round" />
                            <path d="M8 10V24H12V22C12 20.896 12.896 20 14 20H34C35.104 20 36 20.896 36 22V24H40V10H8Z" fill="#5B91C2" />
                            <path d="M22.564 0.552034L0.723998 8.95203C-0.236002 9.32003 -0.236002 10.678 0.723998 11.046L24 20L44 12.308V20C44 21.104 44.896 22 46 22C47.104 22 48 21.104 48 20V11.98C48 10.324 46.98 8.84003 45.436 8.24603L25.436 0.552034C24.512 0.196034 23.488 0.196034 22.564 0.552034Z" fill="#5B91C2" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Təhsil xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.062 10H8.938C7.168 10 5.614 11.16 5.106 12.854C3.926 16.782 2 23.836 2 28C2 33.522 6.476 37.998 11.998 38C18.598 38 29.404 38 36.004 38C41.524 37.998 46 33.522 46 28C46 23.836 44.074 16.782 42.894 12.854C42.386 11.16 40.832 10 39.062 10ZM20 26H18V28C18 29.104 17.104 30 16 30C14.896 30 14 29.104 14 28V26H12C10.896 26 10 25.104 10 24C10 22.896 10.896 22 12 22H14V20C14 18.896 14.896 18 16 18C17.104 18 18 18.896 18 20V22H20C21.104 22 22 22.896 22 24C22 25.104 21.104 26 20 26ZM32 22C30.896 22 30 21.104 30 20C30 18.896 30.896 18 32 18C33.104 18 34 18.896 34 20C34 21.104 33.104 22 32 22ZM36 30C34.896 30 34 29.104 34 28C34 26.896 34.896 26 36 26C37.104 26 38 26.896 38 28C38 29.104 37.104 30 36 30Z" fill="#FF442B" />
                        </svg>


                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Əyləncə və oyunlar</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.95 4C32.766 4 31 6.298 31 6.298C31 6.298 29.234 4 26.05 4C22.708 4 20 6.708 20 10.05C20 13.936 26.78 20.196 29.694 22.706C30.448 23.356 31.552 23.356 32.306 22.706C35.22 20.196 42 13.936 42 10.05C42 6.708 39.292 4 35.95 4ZM43.172 24.828C42.068 23.724 40.276 23.724 39.172 24.828L30 34H22C21.448 34 21 33.552 21 33C21 32.448 21.448 32 22 32H27C28.656 32 30 30.656 30 29C30 27.344 28.656 26 27 26H17.314C15.192 26 13.158 26.842 11.658 28.344L4 36L12 44L16 40H30.344C31.404 40 32.422 39.578 33.172 38.828L43.172 28.828C44.276 27.724 44.276 25.932 43.172 24.828Z" fill="#82E122"/>
</svg>




                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Xeyriyyə və yardım</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8C5.79 8 4 9.79 4 12C4 13.104 4.896 14 6 14H42C43.104 14 44 13.104 44 12C44 9.79 42.21 8 40 8H8ZM6 20C4.896 20 4 20.896 4 22V36C4 38.21 5.79 40 8 40H40C42.21 40 44 38.21 44 36V22C44 20.896 43.104 20 42 20H6Z" fill="#FC3CA5"/>
</svg>

                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Ödəmə kartları</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4061 2.18051C24.1476 2.06559 23.8524 2.06559 23.5939 2.18051L6.59386 9.73606C6.23273 9.89656 6 10.2503 6 10.6455C6 12.6267 6 18.6861 6 22C6 37.4694 18.5664 44.7927 23.8095 45.9597C23.9389 45.9884 24.0611 45.9884 24.1905 45.9597C29.4336 44.7927 42 37.4694 42 22C42 18.6861 42 12.6267 42 10.6455C42 10.2503 41.7673 9.89656 41.4061 9.73606L24.4061 2.18051Z" fill="#5B67DA"/>
</svg>




                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Sığorta xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.396 20.26L25.74 6.60603C24.958 5.82403 23.694 5.82403 22.912 6.60603L14.606 14.908C14.232 15.284 14.02 15.792 14.02 16.322C14.02 16.852 14.23 17.362 14.606 17.736L28.262 31.392C28.652 31.782 29.164 31.978 29.676 31.978C30.188 31.978 30.7 31.782 31.09 31.392L39.394 23.088C39.77 22.712 39.98 22.206 39.98 21.674C39.98 21.142 39.77 20.634 39.396 20.26Z" fill="#746054"/>
<path d="M28.03 40H42.006M40.656 19L27.678 31.978L40.656 19ZM21.982 23.674L6 39.656L21.982 23.674ZM14.02 18.324L26.324 6.02002L14.02 18.324Z" stroke="#746054" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Hüquq xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44 11C44 10.4477 43.5523 10 43 10H37C36.4477 10 36 10.4477 36 11V13C36 13.5523 35.5523 14 35 14H33C32.4477 14 32 13.5523 32 13V11C32 10.4477 31.5523 10 31 10H17C16.4477 10 16 10.4477 16 11V13C16 13.5523 15.5523 14 15 14H13C12.4477 14 12 13.5523 12 13V11C12 10.4477 11.5523 10 11 10H5C4.44772 10 4 10.4477 4 11V39C4 39.5523 4.44772 40 5 40H43C43.5523 40 44 39.5523 44 39V11ZM29 20C30.656 20 32 21.344 32 23C32 24.656 30.656 26 29 26C27.344 26 26 24.656 26 23C26 21.344 27.344 20 29 20ZM30.5514 34.5298C30.0577 34.7753 29.4584 34.5748 29.2118 34.0816L28.1062 31.8704C27.8588 31.3757 28.0601 30.7741 28.5554 30.5278L36.0806 26.7862C36.5743 26.5407 37.1736 26.7412 37.4202 27.2344L38.5258 29.4456C38.7732 29.9403 38.5719 30.5419 38.0766 30.7882L30.5514 34.5298Z" fill="#DF7041"/>
<path d="M32 5C32 4.44772 31.5523 4 31 4H17C16.4477 4 16 4.44772 16 5V11C16 11.5523 16.4477 12 17 12H19C19.5523 12 20 11.5523 20 11V9C20 8.44772 20.4477 8 21 8H27C27.5523 8 28 8.44772 28 9V11C28 11.5523 28.4477 12 29 12H31C31.5523 12 32 11.5523 32 11V5Z" fill="#DF7041"/>
</svg>


                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Turizm və səyahət</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                    <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 14L31.2 0H4.8L0 14V32H6V28H30V32H36V14ZM7.658 4H28.344L31.086 12H4.914L7.658 4ZM7 22C5.344 22 4 20.656 4 19C4 17.344 5.344 16 7 16C8.656 16 10 17.344 10 19C10 20.656 8.656 22 7 22ZM29 22C27.344 22 26 20.656 26 19C26 17.344 27.344 16 29 16C30.656 16 32 17.344 32 19C32 20.656 30.656 22 29 22Z" fill="#189485"/>
</svg>




                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Nəqliyyat xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C14.9391 0 13.9217 0.421428 13.1716 1.17157C12.4214 1.92172 12 2.93913 12 4C12 5.06087 12.4214 6.07828 13.1716 6.82843C13.9217 7.57857 14.9391 8 16 8C17.0609 8 18.0783 7.57857 18.8284 6.82843C19.5786 6.07828 20 5.06087 20 4C20 2.93913 19.5786 1.92172 18.8284 1.17157C18.0783 0.421428 17.0609 0 16 0ZM28 0C26.9391 0 25.9217 0.421428 25.1716 1.17157C24.4214 1.92172 24 2.93913 24 4C24 5.06087 24.4214 6.07828 25.1716 6.82843C25.9217 7.57857 26.9391 8 28 8C29.0609 8 30.0783 7.57857 30.8284 6.82843C31.5786 6.07828 32 5.06087 32 4C32 2.93913 31.5786 1.92172 30.8284 1.17157C30.0783 0.421428 29.0609 0 28 0ZM4 0C2.93913 0 1.92172 0.421428 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4C0 5.06087 0.421427 6.07828 1.17157 6.82843C1.92172 7.57857 2.93913 8 4 8C5.06087 8 6.07828 7.57857 6.82843 6.82843C7.57857 6.07828 8 5.06087 8 4C8 2.93913 7.57857 1.92172 6.82843 1.17157C6.07828 0.421428 5.06087 0 4 0Z" fill="black" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Digərləri</p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default AboutServices