import React from 'react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import heroPhone from '../assets/images/hero_phone.png';
import catParts from '../assets/images/category_parts.png';
import catAccessories from '../assets/images/category_accessories.png';

const ProductDetail = () => {
    const { t } = useLanguage();

    return (
        <main className="fade-in" style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Product Hero Section */}
            <section style={{ padding: 'var(--spacing-md) 0' }}>
                <div className="container hero-container">
                    {/* Image Gallery */}
                    <div style={{
                        backgroundColor: 'var(--color-white)',
                        aspectRatio: '1/1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid #000',
                        padding: '20px'
                    }}>
                        <img src={heroPhone} alt="Antigravity Phone 1" style={{ width: '80%' }} />
                    </div>

                    {/* Product Info */}
                    <div style={{ padding: '20px', backgroundColor: 'var(--color-white)', border: '1.5px solid #000' }}>
                        <nav style={{ fontSize: '11px', color: '#666', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {t('nav.smartphones')} / Antigravity Phone 1
                        </nav>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Antigravity Phone 1</h1>
                        <p style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '30px' }}>$599.00</p>

                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ fontSize: '12px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Color: Matte Black</h4>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <div style={{ width: '30px', height: '30px', backgroundColor: '#000', border: '1.5px solid #000' }}></div>
                                <div style={{ width: '30px', height: '30px', backgroundColor: '#F5F5F5', border: '1.5px solid #000' }}></div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ fontSize: '12px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Storage: 256GB</h4>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Button variant="secondary" style={{ padding: '8px 20px', fontSize: '12px' }}>128GB</Button>
                                <Button style={{ padding: '8px 20px', fontSize: '12px' }}>256GB</Button>
                            </div>
                        </div>

                        <Button style={{ width: '100%', marginBottom: '10px' }}>{t('pdp.addToCart')}</Button>
                    </div>
                </div>
            </section>

            {/* Sustainability Widget */}
            <section style={{ padding: 'var(--spacing-md) 0' }}>
                <div className="container">
                    <div className="sustainability-widget" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'var(--color-white)',
                        border: '1.5px solid #000',
                        padding: '30px',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flex: '1 1 300px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                border: '1.5px solid #000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                flexShrink: 0
                            }}>
                                9.3
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{t('home.repairScore')}</h3>
                                <p style={{ fontSize: '13px', color: '#666' }}>Standard-setting modular design.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flex: '1 1 300px', justifyContent: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.2rem' }}>100%</h4>
                                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>Fair Cobalt</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.2rem' }}>5 Years</h4>
                                <p style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="container" style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '40px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)' }}>{t('pdp.specs')}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Display</th>
                                <td>6.7-inch OLED, 120Hz Adaptative</td>
                            </tr>
                            <tr>
                                <th>Processor</th>
                                <td>Antigravity A1 Neural Engine</td>
                            </tr>
                            <tr>
                                <th>Camera</th>
                                <td>50MP Main (f/1.8), 12MP Ultra-wide</td>
                            </tr>
                            <tr>
                                <th>Battery</th>
                                <td>4500mAh, 30W Fast Charging</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Cross-Selling */}
            <section style={{ padding: 'var(--spacing-lg) 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)', textTransform: 'uppercase' }}>{t('pdp.addons')}</h2>
                    <div className="grid-responsive">
                        <div style={{ textAlign: 'center', border: '1.5px solid #000', backgroundColor: 'var(--color-white)', padding: '5px' }}>
                            <img src={catAccessories} style={{ width: '100%', marginBottom: '10px' }} alt="Protective Case" />
                            <h4 style={{ fontSize: '12px', fontWeight: 400 }}>Protective Case</h4>
                            <p style={{ fontSize: '13px', marginTop: '5px' }}>$29.00</p>
                        </div>
                        <div style={{ textAlign: 'center', border: '1.5px solid #000', backgroundColor: 'var(--color-white)', padding: '5px' }}>
                            <img src={catParts} style={{ width: '100%', marginBottom: '10px' }} alt="Spare Battery" />
                            <h4 style={{ fontSize: '12px', fontWeight: 400 }}>Spare Battery</h4>
                            <p style={{ fontSize: '13px', marginTop: '5px' }}>$29.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
