import React from 'react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const KeepClub = () => {
    const { t } = useLanguage();

    return (
        <main className="fade-in" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ padding: 'var(--spacing-lg) 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>{t('keepClub.title')}</h1>
                <p style={{ fontSize: '14px', color: '#000', marginBottom: 'var(--spacing-lg)', maxWidth: '600px', letterSpacing: '0.5px' }}>
                    {t('keepClub.subtitle')}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t('keepClub.rewards')}</h3>
                        <p style={{ fontSize: '12px' }}>{t('keepClub.rewardsDesc')}</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t('keepClub.access')}</h3>
                        <p style={{ fontSize: '12px' }}>{t('keepClub.accessDesc')}</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid #000', padding: '30px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{t('keepClub.bonus')}</h3>
                        <p style={{ fontSize: '12px' }}>{t('keepClub.bonusDesc')}</p>
                    </div>
                </div>

                <div style={{ marginTop: 'var(--spacing-lg)', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '40px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>{t('keepClub.joinTitle')}</h2>
                    <p style={{ fontSize: '14px', marginBottom: '25px' }}>{t('keepClub.joinDesc')}</p>
                    <Button variant="secondary" style={{ backgroundColor: '#FFF', color: '#000' }}>{t('keepClub.joinBtn')}</Button>
                </div>
            </div>
        </main>
    );
};

export default KeepClub;
