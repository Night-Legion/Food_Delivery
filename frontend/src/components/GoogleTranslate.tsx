import React, { useEffect } from 'react';

// Extend the Window interface to include googleTranslateElementInit
declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate: {
                TranslateElement: new (options: object, containerId: string) => void;
            };
        };
    }
}

interface LanguageOption {
    code: string;
    name: string;
    flag: string;
    }

    const LanguageSwitcher: React.FC = () => {
    const languages: LanguageOption[] = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'zh-CN', name: '中文', flag: '🇨🇳' }
    ];

    useEffect(() => {
        // Add Google Translate script
        const googleScript = document.createElement('script');
        googleScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        googleScript.async = true;
        document.body.appendChild(googleScript);
        
        // Hidden Google Translate element (used for its API only)
        const googleTranslateDiv = document.createElement('div');
        googleTranslateDiv.id = 'google_translate_element';
        googleTranslateDiv.style.display = 'none';
        document.body.appendChild(googleTranslateDiv);
        
        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: languages.map(lang => lang.code).join(','),
                autoDisplay: false
            }, 'google_translate_element');
        }
        };
        
        return () => {
        document.body.removeChild(googleScript);
        document.body.removeChild(googleTranslateDiv);
        delete window.googleTranslateElementInit;
        };
    }, []);

    const changeLanguage = (languageCode: string) => {
        // Get the select element inserted by Google Translate
        const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        
        if (googleSelect) {
        googleSelect.value = languageCode;
        
        // Trigger change event to apply translation
        googleSelect.dispatchEvent(new Event('change'));
        }
    };

    return (
        <div className="relative inline-block text-left">
        <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
        >
            {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
            </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
        </div>
    );
};

export default LanguageSwitcher;