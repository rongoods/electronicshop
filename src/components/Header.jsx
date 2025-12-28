import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const { currentTheme, setCurrentTheme, themes } = useTheme();

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
                    electronics
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
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginRight: '10px' }}>
                        {Object.entries(themes).map(([key, theme]) => (
                            <button
                                key={key}
                                onClick={() => setCurrentTheme(key)}
                                title={theme.name}
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.primary,
                                    border: `1.5px solid ${currentTheme === key ? 'var(--color-black)' : 'transparent'}`,
                                    padding: 0,
                                    cursor: 'pointer',
                                    boxShadow: currentTheme === key ? '0 0 0 1px var(--color-bg)' : 'none'
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                        style={{
                            fontWeight: 700,
                            padding: '4px 8px',
                            border: '1.5px solid var(--color-border)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            color: 'var(--color-black)'
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
