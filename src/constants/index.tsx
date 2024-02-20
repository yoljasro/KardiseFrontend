export interface ServicesType {
    img : string;
    title: string;
    description: string;
    alt: string;
}

export const ServicesArray: ServicesType[] = [
    {
        img: '/assets/img/service1.jpg',
        title: "Услуга I",
        description: "cтроительство объектов жилья, социальных объектов и коммерческой недвижимости",
        alt: "first"
    } ,
    
    {
        title: "Услуга II",
        description: "оформление земельных участков под строительство",
        img: '/assets/img/service2.jpg',
        alt: "second"
    }
]