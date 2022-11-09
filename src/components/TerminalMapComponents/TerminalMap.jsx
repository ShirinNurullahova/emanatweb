import React from 'react';
import Map from './Map';
import Places from './Places';

const TerminalMap = () => {
    return (
        <section className='terminal_map_section'>
            <h1>Terminal <span>xəritəsi</span></h1>
            <div className='terminals_map_container'>
                <Places />
                <Map />
            </div>
        </section>
    )
}

export default TerminalMap;