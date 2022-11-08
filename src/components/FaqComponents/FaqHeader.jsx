import React from 'react'


const FaqHeader = () => {
    return (
        <section className='faq-header'>
            <div className="faq-header-text">
                <h1>Tez-tez verilən suallar</h1>
            </div>

            <div className="faq-header-search">
                <div className="faq-header-search-bar">
                    <input type="text" placeholder='Axtarış...' name="" id="" />
                </div>

                <div className="faq-header-search-buttons">
                    <div className="faq-header-search-buttons-lupa">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.0003 27.9998L22.019 22.0078M25.3337 13.9998C25.3337 17.0056 24.1396 19.8883 22.0142 22.0137C19.8888 24.1391 17.0061 25.3332 14.0003 25.3332C10.9945 25.3332 8.11186 24.1391 5.98645 22.0137C3.86104 19.8883 2.66699 17.0056 2.66699 13.9998C2.66699 10.9941 3.86104 8.11137 5.98645 5.98596C8.11186 3.86055 10.9945 2.6665 14.0003 2.6665C17.0061 2.6665 19.8888 3.86055 22.0142 5.98596C24.1396 8.11137 25.3337 10.9941 25.3337 13.9998V13.9998Z" stroke="#070814" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div className="faq-header-search-buttons-delete">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.7072 6.70709L25.293 5.29297L16.0001 14.5858L6.70722 5.29297L5.29297 6.70709L14.5859 16L5.29297 25.293L6.70722 26.7071L16.0001 17.4142L25.293 26.7071L26.7072 25.293L17.4143 16L26.7072 6.70709Z" fill="#070814"/>
</svg>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqHeader