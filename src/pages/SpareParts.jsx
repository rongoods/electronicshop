import React, { useState } from 'react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import catParts from '../assets/images/category_parts.png';

const SPARE_PARTS = [
    { id: 1, name: 'Battery (Galaxy 1)', model: 'Model 1', price: '$29.99', compatibility: 'Fits Galaxy 1 only' },
    { id: 2, name: 'Main Camera Module', model: 'Model 1', price: '$79.99', compatibility: 'Fits Galaxy 1 only' },
    { id: 3, name: 'Display Assembly', model: 'Model 2', price: '$129.99', compatibility: 'Fits Galaxy 2 only' },
    { id: 4, name: 'USB-C Charging Port', model: 'Model 1', price: '$19.99', compatibility: 'Fits Galaxy 1 & 1+' },
    { id: 5, name: 'Speaker Module', model: 'Model 2', price: '$24.99', compatibility: 'Fits Galaxy 2 only' },
    { id: 6, name: 'Back Cover (Black)', model: 'Model 1', price: '$25.00', compatibility: 'Fits Galaxy 1 only' },
];

const SpareParts = () => {
    const { t } = useLanguage();
    const [activeModel, setActiveModel] = useState('All');

    const filteredParts = activeModel === 'All'
        ? SPARE_PARTS
        : SPARE_PARTS.filter(part => part.model === activeModel);

    const models = ['All', 'Model 1', 'Model 2'];

    return (
        <main className="fade-in" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ padding: 'var(--spacing-lg) 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>{t('spareParts.title')}</h1>
                <p style={{ fontSize: '14px', color: '#000', marginBottom: 'var(--spacing-lg)', maxWidth: '600px', letterSpacing: '0.5px' }}>
                    {t('spareParts.subtitle')}
                </p>

                {/* Filter System */}
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: 'var(--spacing-lg)',
                    flexWrap: 'wrap'
                }}>
                    {models.map(model => (
                        <button
                            key={model}
                            id={`filter-${model.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setActiveModel(model)}
                            style={{
                                fontSize: '12px',
                                fontWeight: activeModel === model ? 700 : 400,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                padding: '10px 20px',
                                border: '1.5px solid #000',
                                backgroundColor: activeModel === model ? '#000' : 'var(--color-bg)',
                                color: activeModel === model ? '#FFF' : '#000',
                                transition: 'all 0.25s ease'
                            }}
                        >
                            {model}
                        </button>
                    ))}
                </div>

                {/* Parts Grid */}
                <div className="grid-responsive">
                    {filteredParts.map(part => (
                        <div key={part.id} className="fade-in" style={{
                            border: '1.5px solid var(--color-black)',
                            backgroundColor: 'var(--color-white)',
                            padding: '5px',
                            textAlign: 'center'
                        }}>
                            <div style={{ backgroundColor: 'var(--color-white)', aspectRatio: '1/1', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={catParts} style={{ width: '60%', opacity: 0.8 }} alt={part.name} />
                            </div>
                            <div style={{ padding: '0 10px 15px' }}>
                                <h3 style={{ fontSize: '12px', fontWeight: 400, marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>{part.name}</h3>
                                <p style={{ fontSize: '11px', color: '#666', marginBottom: '12px' }}>{part.compatibility}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '14px' }}>{part.price}</span>
                                    <Button variant="primary" style={{ padding: '8px 16px', fontSize: '11px' }}>{t('spareParts.buy')}</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SpareParts;
