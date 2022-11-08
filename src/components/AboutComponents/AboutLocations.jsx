import React from 'react'
import LeftImage from '../../assets/img/about-target-left.png';


const AboutLocations = () => {
  return (
    <div className="about-location-section-container">
    <div className="about-location-section-container-left">
        <img src={LeftImage} alt="" loading="lazy"/>
    </div>

    <div className="about-location-section-container-right">
        <div className="about-location-section-container-right-card">
            <div className="about-location-section-container-right-card-icon">
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.669 0.602068C21.2887 0.259794 20.7113 0.259794 20.331 0.602068L0.936995 18.0567C0.255778 18.6698 0.689474 19.8 1.60596 19.8H4C4.55228 19.8 5 20.2477 5 20.8V36.8C5 37.3523 5.44772 37.8 6 37.8H16C16.5523 37.8 17 37.3523 17 36.8V24.8C17 24.2477 17.4477 23.8 18 23.8H24C24.5523 23.8 25 24.2477 25 24.8V36.8C25 37.3523 25.4477 37.8 26 37.8H36C36.5523 37.8 37 37.3523 37 36.8V20.8C37 20.2477 37.4477 19.8 38 19.8H40.394C41.3105 19.8 41.7442 18.6698 41.063 18.0567L21.669 0.602068Z" fill="#0A66B5" />
                </svg>
            </div>

            <div className="about-location-section-container-right-card-text">
                <p className='about-location-section-container-right-card-text-heading'>Kürdəmir filialı</p>
                <p className='about-location-section-container-right-card-text-desc'>Quisque ultrices, diam nec maximus finibus.</p>
            </div>
        </div>

        <div className="about-location-section-container-right-card">
            <div className="about-location-section-container-right-card-icon">
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.669 0.602068C21.2887 0.259794 20.7113 0.259794 20.331 0.602068L0.936995 18.0567C0.255778 18.6698 0.689474 19.8 1.60596 19.8H4C4.55228 19.8 5 20.2477 5 20.8V36.8C5 37.3523 5.44772 37.8 6 37.8H16C16.5523 37.8 17 37.3523 17 36.8V24.8C17 24.2477 17.4477 23.8 18 23.8H24C24.5523 23.8 25 24.2477 25 24.8V36.8C25 37.3523 25.4477 37.8 26 37.8H36C36.5523 37.8 37 37.3523 37 36.8V20.8C37 20.2477 37.4477 19.8 38 19.8H40.394C41.3105 19.8 41.7442 18.6698 41.063 18.0567L21.669 0.602068Z" fill="#0A66B5" />
                </svg>
            </div>

            <div className="about-location-section-container-right-card-text">
                <p className='about-location-section-container-right-card-text-heading'>Gəncə filialı</p>
                <p className='about-location-section-container-right-card-text-desc'>Quisque ultrices, diam nec maximus finibus.</p>
            </div>
        </div>

        <div className="about-location-section-container-right-card">
            <div className="about-location-section-container-right-card-icon">
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.669 0.602068C21.2887 0.259794 20.7113 0.259794 20.331 0.602068L0.936995 18.0567C0.255778 18.6698 0.689474 19.8 1.60596 19.8H4C4.55228 19.8 5 20.2477 5 20.8V36.8C5 37.3523 5.44772 37.8 6 37.8H16C16.5523 37.8 17 37.3523 17 36.8V24.8C17 24.2477 17.4477 23.8 18 23.8H24C24.5523 23.8 25 24.2477 25 24.8V36.8C25 37.3523 25.4477 37.8 26 37.8H36C36.5523 37.8 37 37.3523 37 36.8V20.8C37 20.2477 37.4477 19.8 38 19.8H40.394C41.3105 19.8 41.7442 18.6698 41.063 18.0567L21.669 0.602068Z" fill="#0A66B5" />
                </svg>
            </div>

            <div className="about-location-section-container-right-card-text">
                <p className='about-location-section-container-right-card-text-heading'>Masallı filialı</p>
                <p className='about-location-section-container-right-card-text-desc'>Quisque ultrices, diam nec maximus finibus.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutLocations