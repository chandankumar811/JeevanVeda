import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext.jsx';
import { useTheme } from '../Context/ThemeContext.jsx';
import { getThemeClasses } from '../utils/theme.js';

const LanguageSwitcher = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const {darkMode} = useTheme()
  const themeClasses = getThemeClasses(darkMode);
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ne', name: 'नेपाली', flag: '🇳🇵' }
  ];


  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${themeClasses.languageSwitcher.button} flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors`}
      >
        <Globe size={16} />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === currentLanguage)?.name}
        </span>
      </button>

      {isOpen && (
        <div className={`${themeClasses.languageSwitcher.conatianer} absolute right-0 mt-2 w-40   rounded-lg shadow-lg border z-50`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrentLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2 ${
                currentLanguage === lang.code
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                  : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
