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
    lat: 41.2995, // Kardise koordinatalari
    lng: 69.2401,
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
            name: "Toshkent",
            location: { lat: 41.2995, lng: 69.2401 },
            info: "O'zbekistonning poytaxti",
        },
        {
            name: "Kardise",
            location: { lat: 41.2995, lng: 69.2401 }, // Kardise locatsiyasi
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
                <LoadScript googleMapsApiKey="AIzaSyCDwGCZMzBTOv6Oe4LwQYJ76bDCc6ZYP_A">
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
                                    url: selectedPlace === place ? "/public/assets/img/arrow.svg" : "/public/assets/img/arrow.svg",
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
