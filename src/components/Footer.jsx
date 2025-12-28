import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{
            padding: 'var(--spacing-xl) 0 var(--spacing-md)',
            backgroundColor: 'var(--color-bg)',
            borderTop: '1.5px solid var(--color-border)',
            marginTop: 'var(--spacing-xl)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div className="grid-responsive" style={{
                    marginBottom: 'var(--spacing-xl)',
                    textAlign: 'left'
                }}>
                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('footer.products')}</h4>
                        <ul style={{ fontSize: '13px', lineHeight: '2' }}>
                            <li><Link to="/smartphones">{t('nav.smartphones')}</Link></li>
                            <li><Link to="/audio">{t('nav.audio')}</Link></li>
                            <li><Link to="/accessories">{t('nav.accessories')}</Link></li>
                            <li><Link to="/spare-parts">{t('nav.spareParts')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('footer.about')}</h4>
                        <ul style={{ fontSize: '13px', lineHeight: '2' }}>
                            <li><Link to="/our-story">Our Story</Link></li>
                            <li><Link to="/sustainability">Sustainability</Link></li>
                            <li><Link to="/repairability">Repairability</Link></li>
                            <li><Link to="/keep-club">Keep Club</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('footer.support')}</h4>
                        <ul style={{ fontSize: '13px', lineHeight: '2' }}>
                            <li><Link to="/help-center">Help Center</Link></li>
                            <li><Link to="/repair-hub">Repair Tutorials</Link></li>
                            <li><Link to="/shipping">Shipping & Returns</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('footer.newsletter')}</h4>
                        <div style={{ display: 'flex', borderBottom: '1.5px solid var(--color-black)', paddingBottom: '4px', maxWidth: '300px' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    border: 'none',
                                    width: '100%',
                                    outline: 'none',
                                    fontSize: '13px',
                                    padding: '4px 0',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'var(--font-mono)'
                                }}
                            />
                            <button style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 700 }}>{t('footer.join')}</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: 'var(--spacing-md)',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: '12px',
                    color: '#666',
                    letterSpacing: '1px'
                }}>
                    <div>© 2025 ANTIGRAVITY. ALL RIGHTS RESERVED.</div>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
