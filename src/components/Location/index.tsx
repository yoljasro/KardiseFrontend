import React, { FC, useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import styles from './index.module.sass';
// next components
import Image from "next/image";
import Link from "next/link";

const mapContainerStyle = {
    width: "100%",
    height: "500px",
    marginBottom: "100px",
};

const center = {
    lat: 41.344821,
    lng: 69.204804,
};

type Location = {
    lat: number;
    lng: number;
};

type Place = {
    location: Location;
    name: string;
};

type MapProps = {};

export const Location: FC<MapProps> = () => {
    const [places, setPlaces] = useState<Place[]>([
        {
            name: "Sariq Bola",
            location: { lat: 41.315280, lng: 69.289190 },
        },
    ]);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const onMarkerClick = (place: Place) => {
        setSelectedPlace(place);
    };

    useEffect(() => {
        // Bu useEffect belgilangan manzilni tanlangan bo'lib qoladi
        if (selectedPlace) {
            // Manzil belgilanadi
            window.location.href = `https://maps.google.com/?q=${selectedPlace.location.lat},${selectedPlace.location.lng}`;
        }
    }, [selectedPlace]);

    return (
        <div className={styles.location}>
            <div>
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
                                    url: selectedPlace === place ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png" : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                                }}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
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
        </div>
    );
};
