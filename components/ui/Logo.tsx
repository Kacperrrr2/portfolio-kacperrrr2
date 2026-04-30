import React from 'react';

const Logo = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>
            <rect width="200" height="200" rx="48" fill="url(#logoGradient)" />
            <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize="50"
                fontWeight="900"
                fill="white"
                style={{ letterSpacing: '-2px' }}
            >
                KP
            </text>
        </svg>
    );
};

export default Logo;