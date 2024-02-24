declare module 'react-reveal' {
    import React from 'react';

    interface FadeProps {
        duration?: number; // To'g'ri: number
        delay?: number; // To'g'ri: number
        fraction?: number; // To'g'ri: number
        fadeStyle?: React.CSSProperties;
        children?: React.ReactNode;
        left? : true;
        cascade: true;
        top? : true;
        right? : true;
        bottom? : true;
    }

    interface ZoomProps {
        duration?: number; // To'g'ri: number
        delay?: number; // To'g'ri: number
        fraction?: number; // To'g'ri: number
        zoomStyle?: {};
        children?: React.ReactNode; // To'g'ri: React.ReactNode
        cascade? : true;
        left? : true;
        right? : true;
        top? : true;
    }

    interface RotateProps {
        duration?: number; // To'g'ri: number
        delay?: number; // To'g'ri: number
        fraction?: number; // To'g'ri: number
        zoomStyle?: {};
        children?: React.ReactNode; // To'g'ri: React.ReactNode
        cascade? : true;
        left? : true;
        right? : true;
        top? : true;
    }

    interface FlipProps {
        duration?: number; // To'g'ri: number
        delay?: number; // To'g'ri: number
        fraction?: number; // To'g'ri: number
        zoomStyle?: {};
        children?: React.ReactNode; // To'g'ri: React.ReactNode
        cascade? : true;
        left? : true;
        right? : true;
        top? : true;
    }

    export const Fade: React.FC<FadeProps>;
    export const Zoom: React.FC<ZoomProps>;
    export const Rotate: React.FC<RotateProps>;
    export const Flip: React.FC<FlipProps>;
}
