import React from 'react'
import { useLanguage } from '../Context/LanguageContext'
import { useTheme } from '../Context/ThemeContext'
import { getThemeClasses } from '../utils/theme'
import { Helmet } from 'react-helmet'

const About = () => {
    const {t} = useLanguage()
    const {darkMode} = useTheme()
    const themeClasses = getThemeClasses(darkMode)
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>AboutPage</title>
        <meta name="description" content="This is about page" />
      </Helmet>
      <h1 className={`${themeClasses.heading} text-3xl font-bold mb-8`}>
        {t('about.title')}
      </h1>
      
      <div className="space-y-8">
        <div className={`${themeClasses.subContainer} rounded-lg p-8 shadow-sm border`}>
          <h2 className={`text-xl ${themeClasses.subHeading} mb-4`}>
            Our Mission
          </h2>
          <p className={`${themeClasses.paragraph} leading-relaxed`}>
            {t('about.mission')}
          </p>
        </div>
        
        <div className={`${themeClasses.subContainer} rounded-lg p-8 shadow-sm border`}>
          <h2 className={`text-xl ${themeClasses.subHeading} mb-4 `}>
            Our Vision
          </h2>
          <p className={`${themeClasses.paragraph} leading-relaxed`}>
            {t('about.vision')}
          </p>
        </div>
        
        <div className={`${themeClasses.subContainer} rounded-lg p-8 shadow-sm border`}>
          <h2 className={`text-xl ${themeClasses.subHeading} mb-4 `}>
            Our Team
          </h2>
          <p className={`${themeClasses.paragraph} leading-relaxed`}>
            {t('about.team')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
