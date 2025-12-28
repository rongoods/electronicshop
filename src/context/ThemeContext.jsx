import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    noir: {
        name: 'Noir',
        bg: '#F5F5F5',
        text: '#000000',
        border: '#000000',
        primary: '#000000',
        secondary: '#FFFFFF'
    },
    cosmic: {
        name: 'Cosmic',
        bg: '#0F0C29',
        text: '#E0E0E0',
        border: '#6200EE',
        primary: '#6200EE',
        secondary: '#C6FF00'
    },
    aura: {
        name: 'Aura',
        bg: '#002B36',
        text: '#93A1A1',
        border: '#2AA198',
        primary: '#2AA198',
        secondary: '#DC322F'
    },
    solar: {
        name: 'Solar',
        bg: '#FFFBF0',
        text: '#333333',
        border: '#00AFFF',
        primary: '#00AFFF',
        secondary: '#FF8C00'
    },
    botanical: {
        name: 'Botanical',
        bg: '#E8F5E9',
        text: '#1B5E20',
        border: '#2E7D32',
        primary: '#2E7D32',
        secondary: '#F06292'
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme-choice') || 'noir';
    });

    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;

        root.style.setProperty('--color-bg', theme.bg);
        root.style.setProperty('--color-black', theme.text);
        root.style.setProperty('--color-border', theme.border);
        root.style.setProperty('--color-primary', theme.primary);
        root.style.setProperty('--color-secondary', theme.secondary);
        root.style.setProperty('--color-white', theme.bg === '#F5F5F5' ? '#FFFFFF' : theme.bg);

        localStorage.setItem('theme-choice', currentTheme);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
