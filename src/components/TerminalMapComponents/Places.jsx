import React from 'react';
import terminalsData from './data/terminals-data.json';

const Places = () => {
    return (
        <div className='places_container'>
            <div className='select_place_options'>
                <button className='address_button'>
                    <p>Ünvan</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L6 8.5L10 4.5" stroke="#0A66B5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className='street_button'>
                    <p>Küçə</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.5L6 8.5L10 4.5" stroke="#0A66B5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className='places_list'>
                {terminalsData.features.map((terminal, index) => (
                    <div key={index} className='place_item'>
                        <h3>{terminal.properties.description.split(',')[0]}</h3>
                        <p>{terminal.properties.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Places;