import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import terminalsData from './data/terminals-data.json';

function Map() {
    const [zoom, setZoom] = useState(14);
    const [center, setCenter] = useState({
        lat: 40.3850,
        lng: 49.8687
    });

    return (
        <div className="map_container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBQqNTYhcxUFQ0uz4ursLvGyC_ObqGATg4" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {terminalsData.features?.map((location, index) => (
                    <div key={index}
                        lat={location.geometry?.coordinates[1]}
                        lng={location.geometry?.coordinates[0]}
                        className="marker_elem"
                    >
                        {index % 2 === 0
                            ? <svg width="37" height="39" viewBox="0 0 37 39" fill="#F99400" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3628 3.20264C11.6131 3.20264 6.12122 8.94989 6.12122 16.0054C6.07684 26.3262 17.8976 34.8838 18.3628 35.2297C18.3628 35.2297 30.6487 26.3262 30.6043 16.0134C30.6043 8.94989 25.1124 3.20264 18.3628 3.20264ZM18.3628 22.4189C14.981 22.4189 12.242 19.5524 12.242 16.0134C12.242 12.4745 14.981 9.60804 18.3628 9.60804C21.7445 9.60804 24.4835 12.4745 24.4835 16.0134C24.4835 19.5524 21.7445 22.4189 18.3628 22.4189Z" />
                                <ellipse cx="18.363" cy="15.6576" rx="6.12077" ry="6.40541" fill="white" />
                            </svg>
                            : <svg width="37" height="39" viewBox="0 0 37 39" fill="#0A66B5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3628 3.20264C11.6131 3.20264 6.12122 8.94989 6.12122 16.0054C6.07684 26.3262 17.8976 34.8838 18.3628 35.2297C18.3628 35.2297 30.6487 26.3262 30.6043 16.0134C30.6043 8.94989 25.1124 3.20264 18.3628 3.20264ZM18.3628 22.4189C14.981 22.4189 12.242 19.5524 12.242 16.0134C12.242 12.4745 14.981 9.60804 18.3628 9.60804C21.7445 9.60804 24.4835 12.4745 24.4835 16.0134C24.4835 19.5524 21.7445 22.4189 18.3628 22.4189Z" />
                                <ellipse cx="18.363" cy="15.6576" rx="6.12077" ry="6.40541" fill="white" />
                            </svg>
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;