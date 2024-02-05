import React, { FC, useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import styles from './index.module.sass';

const mapContainerStyle = {
    width: "95%",
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
            <div>``
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
        </div>
    );
};
