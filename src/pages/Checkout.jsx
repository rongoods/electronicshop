import React, { useState } from 'react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Checkout = () => {
    const { t } = useLanguage();
    const [tradeInValue, setTradeInValue] = useState(0);
    const subtotal = 599.00;
    const shipping = 0.00;
    const total = subtotal + shipping - tradeInValue;

    const handleTradeInChange = (e) => {
        setTradeInValue(Number(e.target.value));
    };

    return (
        <main className="fade-in" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ padding: 'var(--spacing-md) 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>{t('checkout.title')}</h1>

                <div className="hero-container">
                    {/* Guest Checkout Form */}
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px' }}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{t('checkout.shipping')}</h2>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <input type="text" placeholder="Full Name" style={{ padding: '12px', border: '1.5px solid #000', fontFamily: 'var(--font-mono)', fontSize: '13px' }} />
                            <input type="email" placeholder="Email Address" style={{ padding: '12px', border: '1.5px solid #000', fontFamily: 'var(--font-mono)', fontSize: '13px' }} />
                            <input type="text" placeholder="Street Address" style={{ padding: '12px', border: '1.5px solid #000', fontFamily: 'var(--font-mono)', fontSize: '13px' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <input type="text" placeholder="City" style={{ padding: '12px', border: '1.5px solid #000', fontFamily: 'var(--font-mono)', fontSize: '13px' }} />
                                <input type="text" placeholder="ZIP Code" style={{ padding: '12px', border: '1.5px solid #000', fontFamily: 'var(--font-mono)', fontSize: '13px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary + Trade-in */}
                    <div style={{ display: 'grid', gap: '20px' }}>
                        <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px' }}>
                            <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{t('checkout.summary')}</h2>
                            <div style={{ display: 'grid', gap: '10px', fontSize: '13px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>
                                    <span>electronics Phone 1</span>
                                    <span>$599.00</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Shipping</span>
                                    <span>FREE</span>
                                </div>
                                {tradeInValue > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#000', fontWeight: 700 }}>
                                        <span>Trade-in Credit</span>
                                        <span>-${tradeInValue.toFixed(2)}</span>
                                    </div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, marginTop: '20px', borderTop: '1.5px solid #000', paddingTop: '15px' }}>
                                    <span>{t('checkout.total')}</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Button style={{ width: '100%', marginTop: '20px' }}>{t('checkout.complete')}</Button>
                        </div>

                        {/* Trade-in Calculator */}
                        <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px' }}>
                            <h2 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{t('checkout.tradeIn')}</h2>
                            <p style={{ fontSize: '12px', marginBottom: '15px' }}>Select your old device to see your potential credit.</p>
                            <select
                                onChange={handleTradeInChange}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1.5px solid #000',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '13px',
                                    marginBottom: '10px'
                                }}
                            >
                                <option value="0">No trade-in</option>
                                <option value="150">Galaxy 0 (Very Good)</option>
                                <option value="80">Galaxy 0 (Fair)</option>
                                <option value="200">Phone X (Excellent)</option>
                            </select>
                            {tradeInValue > 0 && <p style={{ fontSize: '11px', color: '#000' }}>Applied Credit: ${tradeInValue}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
