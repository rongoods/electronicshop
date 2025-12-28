import React from 'react';

const Button = ({ children, variant = 'primary', onClick, style, ...props }) => {
    const isPrimary = variant === 'primary';

    const baseStyle = {
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '2.8px',
        transition: 'all 0.25s ease',
        display: 'inline-block',
        textAlign: 'center',
        border: '1.5px solid var(--color-black)',
        borderRadius: '0',
        ...style
    };

    const variantStyle = isPrimary ? {
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-white)',
    } : {
        backgroundColor: 'transparent',
        color: 'var(--color-black)',
    };

    return (
        <button
            style={{ ...baseStyle, ...variantStyle }}
            onClick={onClick}
            onMouseOver={(e) => {
                if (isPrimary) {
                    e.currentTarget.style.opacity = '0.8';
                } else {
                    e.currentTarget.style.backgroundColor = 'var(--color-black)';
                    e.currentTarget.style.color = 'var(--color-white)';
                }
            }}
            onMouseOut={(e) => {
                if (isPrimary) {
                    e.currentTarget.style.opacity = '1';
                } else {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-black)';
                }
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
