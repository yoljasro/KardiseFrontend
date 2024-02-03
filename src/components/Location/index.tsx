import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//styles
import styles from "./index.module.sass";

export const Location: React.FC = () => {
    const containerStyle = {
        width: '100%',
        height: '591px',
    };

    const center = {
        lat: 41.315280 , // Kardise kompaniyasining latitude
        lng: 69.289190, // Kardise kompaniyasining longitude
    };

    return (
        <div className={styles.location}>
        <LoadScript googleMapsApiKey="AIzaSyCDwGCZMzBTOv6Oe4LwQYJ76bDCc6ZYP_A">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                {/* Kardise kompaniyasining markeri */}
                <Marker
                    position={center}
                    title="Kardise Kompaniyasi"
                    icon={{
                        path:
                            'M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 23c-4.417 0-8-3.582-8-8s3.583-8 8-8 8 3.582 8 8-3.583 8-8 8z',
                        fillColor: 'red',
                        fillOpacity: 1,
                        scale: 1,
                        strokeColor: 'black',
                        strokeWeight: 2,
                    }}
                />
            </GoogleMap>
        </LoadScript>
        <div className={styles.location__info}>
            {/* <div className={styles.location__adress}></div> */}
        </div>
        </div >
    );
};

