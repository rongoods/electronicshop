import React from 'react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

import heroPhone from '../assets/images/hero_phone.png';
import catAudio from '../assets/images/category_audio.png';
import catParts from '../assets/images/category_parts.png';
import catAccessories from '../assets/images/category_accessories.png';

const Home = () => {
    const { t } = useLanguage();

    return (
        <main style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Hero Section */}
            <section style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--spacing-xl) 0',
                backgroundColor: 'var(--color-bg)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                    gap: 'var(--spacing-lg)'
                }}>
                    <div className="fade-in">
                        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: 'var(--spacing-md)', fontWeight: 700 }}>
                            {t('home.heroTitle')}
                        </h1>
                        <p style={{ fontSize: '15px', marginBottom: 'var(--spacing-md)', maxWidth: '400px', color: '#000', letterSpacing: '0.5px' }}>
                            {t('home.heroSubtitle')}
                        </p>
                        <Button>{t('home.explore')}</Button>
                    </div>
                    <div className="fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={heroPhone}
                            alt="Galaxy 1 Smartphone"
                            style={{ width: '100%', maxWidth: '500px', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </section>

            {/* Category Grid Section */}
            <section style={{ padding: 'var(--spacing-lg) 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px'
                    }}>
                        <ProductCard
                            id="galaxy-1"
                            image={heroPhone}
                            title={t('nav.smartphones')}
                            price="From $599"
                        />
                        <ProductCard
                            id="audio-pods"
                            image={catAudio}
                            title={t('nav.audio')}
                            price="From $129"
                        />
                        <ProductCard
                            id="cables"
                            image={catAccessories}
                            title={t('nav.accessories')}
                            price="From $29"
                        />
                        <ProductCard
                            id="spare-parts"
                            image={catParts}
                            title={t('nav.spareParts')}
                            price="From $15"
                        />
                    </div>
                </div>
            </section>

            {/* Sustainability Highlight */}
            <section style={{
                padding: 'var(--spacing-xl) 0',
                backgroundColor: 'var(--color-white)',
                borderTop: '1.5px solid #000',
                borderBottom: '1.5px solid #000',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>{t('home.longevityTitle')}</h2>
                    <p style={{ fontSize: '14px', color: '#000', marginBottom: 'var(--spacing-md)', letterSpacing: '0.5px' }}>
                        {t('home.longevityDesc')}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <div style={{ padding: 'var(--spacing-md)', border: '1.5px solid #000', backgroundColor: 'var(--color-white)', flex: 1, textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>9.3</h3>
                            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('home.repairScore')}</p>
                        </div>
                        <div style={{ padding: 'var(--spacing-md)', border: '1.5px solid #000', backgroundColor: 'var(--color-white)', flex: 1, textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>100%</h3>
                            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('home.recycled')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
