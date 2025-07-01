import React, { useState} from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../Context/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useTheme } from '../Context/ThemeContext.jsx';
import { getThemeClasses } from '../utils/theme.js';
import { useNavigate } from 'react-router-dom';

const Header = ({ }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const { t } = useLanguage();
      const {darkMode, toggleTheme} = useTheme();
      const themeClasses = getThemeClasses(darkMode);
    const navItems = [
    { id: 'home', label: t('nav.home'), to: '/' },
    { id: 'categories', label: t('nav.categories'), to: '/categories' },
    { id: 'about', label: t('nav.about'), to: '/about' },
    { id: 'contact', label: t('nav.contact'), to: '/contact' },
  ];

  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const item = navItems.find(item => item.id === id);
    if (item) {
      navigate(item.to);
      setMobileMenuOpen(false);
    }
  }

  return (
    <header className={`sticky top-0 z-40 ${themeClasses.container}  shadow-sm border-b border-gray-200 dark:border-gray-700`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JV</span>
                </div>
                <span className="text-xl font-bold">
                  {t('home.title')}
                </span>
              </div>
    
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors  ${themeClasses.navbar}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
    
              {/* Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${themeClasses.container} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                >
                  {darkMode ? <Sun className='text-yellow-600' size={16} /> : <Moon size={16} />}
                </button>
                
                <LanguageSwitcher />
                
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-2 rounded-lg ${themeClasses.container} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
    
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={` block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${themeClasses.navbar} `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>
  )
}

export default Header
