import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, price, subtitle, id = '1' }) => {
    return (
        <Link to={`/product/${id}`} className="fade-in" style={{
            cursor: 'pointer',
            display: 'block',
            border: '1.5px solid var(--color-border)',
            backgroundColor: 'var(--color-white)',
            padding: '5px',
            transition: 'transform 0.25s ease',
            textAlign: 'center'
        }}>
            <div style={{
                backgroundColor: 'var(--color-white)',
                aspectRatio: '1/1',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px'
            }}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '90%',
                        height: '90%',
                        objectFit: 'contain',
                        transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>
            <div style={{ padding: '0 10px 15px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 400, marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
                {subtitle && <p style={{ fontSize: '11px', color: '#666', marginBottom: '8px' }}>{subtitle}</p>}
                <p style={{ fontSize: '14px', fontWeight: 400 }}>{price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
