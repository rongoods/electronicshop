import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            smartphones: 'Smartphones',
            audio: 'Audio',
            accessories: 'Accessories',
            spareParts: 'Spare Parts',
            search: 'SEARCH',
            cart: 'CART'
        },
        home: {
            heroTitle: 'Antigravity Phone 1.',
            heroSubtitle: 'The iconic modular smartphone reimagined. Designed for longevity. Built for impact.',
            explore: 'Explore Collection',
            longevityTitle: 'Longevity by Design.',
            longevityDesc: 'We believe the most sustainable tech is the tech you keep. Antigravity devices are 100% modular and repairable.',
            repairScore: 'Repair Score',
            recycled: 'Recycled'
        },
        spareParts: {
            title: 'Spare Parts',
            subtitle: 'Genuine components to extend the life of your device.',
            buy: 'Buy'
        },
        checkout: {
            title: 'Checkout',
            shipping: '1. Shipping Details',
            summary: 'Order Summary',
            total: 'Total',
            complete: 'Complete Purchase',
            tradeIn: 'Trade-in Calculator'
        },
        footer: {
            products: 'Products',
            about: 'About',
            support: 'Support',
            newsletter: 'Newsletter',
            join: 'Join'
        },
        pdp: {
            addToCart: 'Add to Cart',
            specs: 'Specifications',
            addons: 'Essential Add-ons'
        },
        repairHub: {
            title: 'Repair Hub',
            subtitle: 'Antigravity devices are designed to be opened. Explore guides, tools, and spare parts.',
            tutorials: 'Popular Tutorials',
            help: 'Professional Help',
            helpDesc: 'Not comfortable doing it yourself? Find an authorized repair shop near you.',
            findShop: 'Find a Shop'
        },
        keepClub: {
            title: 'Keep Club',
            subtitle: 'The loyalty program that rewards longevity.',
            rewards: 'Repair Rewards',
            rewardsDesc: 'Earn points every time you repair your device instead of replacing it.',
            access: 'Early Access',
            accessDesc: 'Members get first access to limited edition spare parts and modules.',
            bonus: 'Trade-in Bonus',
            bonusDesc: 'Get 20% more credit when you trade in your old Antigravity device.',
            joinTitle: 'Join the Movement',
            joinDesc: 'Sign up today and start earning rewards for keeping your tech alive.',
            joinBtn: 'Join For Free'
        }
    },
    de: {
        nav: {
            smartphones: 'Smartphones',
            audio: 'Audio',
            accessories: 'Zubehör',
            spareParts: 'Ersatzteile',
            search: 'SUCHE',
            cart: 'WARENKORB'
        },
        home: {
            heroTitle: 'Antigravity Phone 1.',
            heroSubtitle: 'Das ikonische modulare Smartphone neu gedacht. Entworfen für Langlebigkeit. Gebaut für Wirkung.',
            explore: 'Kollektion Erkunden',
            longevityTitle: 'Langlebigkeit durch Design.',
            longevityDesc: 'Wir glauben, dass die nachhaltigste Technik die ist, die man behält. Antigravity-Geräte sind zu 100 % modular und reparierbar.',
            repairScore: 'Reparatur-Score',
            recycled: 'Recycelt'
        },
        spareParts: {
            title: 'Ersatzteile',
            subtitle: 'Originalkomponenten, um die Lebensdauer Ihres Geräts zu verlängern.',
            buy: 'Kaufen'
        },
        checkout: {
            title: 'Kasse',
            shipping: '1. Versanddetails',
            summary: 'Bestellübersicht',
            total: 'Gesamt',
            complete: 'Kauf Abschließen',
            tradeIn: 'Inzahlungnahme-Rechner'
        },
        footer: {
            products: 'Produkte',
            about: 'Über uns',
            support: 'Support',
            newsletter: 'Newsletter',
            join: 'Anmelden'
        },
        pdp: {
            addToCart: 'In den Warenkorb',
            specs: 'Spezifikationen',
            addons: 'Wichtige Ergänzungen'
        },
        repairHub: {
            title: 'Reparatur-Hub',
            subtitle: 'Antigravity-Geräte sind so konzipiert, dass sie geöffnet werden können. Entdecken Sie Anleitungen, Werkzeuge und Ersatzteile.',
            tutorials: 'Beliebte Tutorials',
            help: 'Professionelle Hilfe',
            helpDesc: 'Sie fühlen sich nicht wohl dabei, es selbst zu tun? Finden Sie eine autorisierte Werkstatt in Ihrer Nähe.',
            findShop: 'Werkstatt finden'
        },
        keepClub: {
            title: 'Keep Club',
            subtitle: 'Das Treueprogramm, das Langlebigkeit belohnt.',
            rewards: 'Reparatur-Belohnungen',
            rewardsDesc: 'Sammeln Sie Punkte jedes Mal, wenn Sie Ihr Gerät reparieren, anstatt es zu ersetzen.',
            access: 'Früher Zugang',
            accessDesc: 'Mitglieder erhalten zuerst Zugang zu limitierten Ersatzteilen und Modulen.',
            bonus: 'Inzahlungnahme-Bonus',
            bonusDesc: 'Erhalten Sie 20 % mehr Gutschrift, wenn Sie Ihr altes Antigravity-Gerät eintauschen.',
            joinTitle: 'Werden Sie Teil der Bewegung',
            joinDesc: 'Melden Sie sich noch heute an und fangen Sie an, Belohnungen dafür zu sammeln, dass Sie Ihre Technik am Leben erhalten.',
            joinBtn: 'Kostenlos Beitreten'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];
        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
