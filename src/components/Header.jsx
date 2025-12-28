import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <header style={{
            padding: '7px 0',
            borderBottom: '1.5px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg)',
            zIndex: 1000
        }}>
            <div className="container header-container">
                <Link to="/" style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    ANTIGRAVITY
                </Link>

                <nav className="header-nav">
                    <ul>
                        <li><Link to="/smartphones">{t('nav.smartphones')}</Link></li>
                        <li><Link to="/audio">{t('nav.audio')}</Link></li>
                        <li><Link to="/accessories">{t('nav.accessories')}</Link></li>
                        <li><Link to="/spare-parts">{t('nav.spareParts')}</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                        style={{
                            fontWeight: 700,
                            padding: '4px 8px',
                            border: '1.5px solid #000',
                            fontSize: '11px',
                            cursor: 'pointer'
                        }}
                    >
                        {language === 'en' ? 'DE' : 'EN'}
                    </button>
                    <Link to="/search">{t('nav.search')}</Link>
                    <Link to="/cart">{t('nav.cart')} (0)</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
