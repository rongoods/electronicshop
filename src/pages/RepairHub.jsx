import React from 'react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const RepairHub = () => {
    const { t } = useLanguage();

    return (
        <main className="fade-in" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ padding: 'var(--spacing-lg) 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>{t('repairHub.title')}</h1>
                <p style={{ fontSize: '14px', color: '#000', marginBottom: 'var(--spacing-lg)', maxWidth: '600px', letterSpacing: '0.5px' }}>
                    {t('repairHub.subtitle')}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{t('repairHub.tutorials')}</h2>
                        <ul style={{ fontSize: '14px', lineHeight: '2.5' }}>
                            <li style={{ borderBottom: '1.5px solid #000' }}><a href="#">How to Replace your Battery →</a></li>
                            <li style={{ borderBottom: '1.5px solid #000' }}><a href="#">Screen Replacement Guide →</a></li>
                            <li style={{ borderBottom: '1.5px solid #000' }}><a href="#">Camera Module Upgrade →</a></li>
                            <li style={{ borderBottom: '1.5px solid #000' }}><a href="#">USB-C Port Repair →</a></li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{t('repairHub.help')}</h2>
                        <p style={{ fontSize: '14px', marginBottom: '20px' }}>{t('repairHub.helpDesc')}</p>
                        <Button variant="primary">{t('repairHub.findShop')}</Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RepairHub;
