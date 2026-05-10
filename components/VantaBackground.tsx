"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface VantaEffect {
    destroy: () => void;
}
type VantaInitFunction = (config: {
    el: HTMLElement | null;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    baseColor?: number;
    backgroundColor?: number;
    size?: number;
    amplitudeFactor?: number;
}) => VantaEffect;

const VantaBackground = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

    useEffect(() => {
        const loadVanta = async () => {
            const HALO = (await import('vanta/dist/vanta.halo.min')).default as VantaInitFunction;

            if (!vantaEffect && vantaRef.current) {
                setVantaEffect(
                    HALO({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        baseColor: 0x9333ea,
                        backgroundColor: 0x0b0e14,
                        size: 1.5,
                    })
                );
            }
        };

        loadVanta();

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -1,
            }}
        />
    );
};

export default VantaBackground;