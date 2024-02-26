import { useState, FC, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// next components
import Image from "next/image";
import Link from "next/link";
// styles
import styles from './index.module.sass'
// react-reveal
import { Rotate  , Flip, Fade , Zoom} from "react-reveal";

const mapContainerStyle = {
    width: "100%",
    height: "500px",
    marginBottom: "100px",
};

const center = {
    lat: 41.315280, // Kardise koordinatalari
    lng: 69.289190 ,
};

type Location = {
    lat: number;
    lng: number;
};

type Place = {
    location: Location;
    name: string;
    info: string;
};

type MapProps = {};   
                                
export const Location: FC<MapProps> = () => {
    const [places, setPlaces] = useState<Place[]>([
        {
            name: "Kardise",
            location: { lat: 41.315280, lng: 69.289190 },
            info: "Qurilish Kompaniyasi",
        },
    ]);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const onMarkerClick = (place: Place) => {
        setSelectedPlace(place);
    };

    const closeInfoWindow = () => {
        setSelectedPlace(null);
    };

    return (
        <>
        <Zoom bottom cascade>
        <div className={styles.location}>
            <div>
                {selectedPlace && (
                    <InfoWindow
                        position={selectedPlace.location}
                        onCloseClick={closeInfoWindow}
                    >
                        <div>
                            <h2>{selectedPlace.name}</h2>
                            <p>{selectedPlace.info}</p>
                        </div>
                    </InfoWindow>
                )}
            </div>
            <div>
                <LoadScript googleMapsApiKey="AIzaSyCBNEcEo5qilBZTygjDy59HcujlvPYS4XI">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={12}
                    >
                        {places.map((place, index) => (
                            <Marker
                                key={index}
                                position={place.location}
                                label={place.name}
                                onClick={() => onMarkerClick(place)}
                                icon={{
                                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                  }}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <Rotate cascade>
            <div className={styles.location__adress}>
                <div className={styles.location__card}>
                    <div className={styles.location__cardLine}></div>
                    <p className={styles.location__cardTitle}>АДРЕС КОМПАНИИ </p>
                    <p className={styles.location__cardDesc}> 8A, Ташкентская кольцевая автомобильная дорога</p>
                </div>

                <div className={styles.location__phone}>
                    <Image src={'/assets/img/iconcall.svg'} alt="iconcall" width={65} height={65} />
                    <div>
                        <p className={styles.location__companyPhone}>ТЕЛЕФОНЫ КОМПАНИИ </p>
                        <p className={styles.location__number}>+ 998 93 389 13 12</p>
                        <p className={styles.location__number}>+ 998 93 389 54 39</p>
                    </div>
                </div>

                <div className={styles.location__email}>
                    <Image src={'/assets/img/iconemail.svg'} alt="iconemail" width={65} height={65} />
                    <div>
                        <p className={styles.location__companyEmail}>ЭЛЕКТРОННАЯ ПОЧТА </p>
                        <p className={styles.location__emailName}>kardise@gmail.com</p>
                        <p className={styles.location__emailName}>kardise.info@gmail.com</p>
                    </div>
                </div>
            </div>
            </Rotate>
        </div>
        </Zoom>
        </>
    );
};
