import React, { useState } from 'react'
import { useLanguage } from '../Context/LanguageContext.jsx'
import blogData from '../data/blogData';
import BlogCard from '../components/BlogCard.jsx';
import { useTheme } from '../Context/ThemeContext.jsx';
import { getThemeClasses } from '../utils/theme.js';

const Categories = () => {
    const { t, currentLanguage } = useLanguage();
      const [selectedCategory, setSelectedCategory] = useState('all');
      const blogs = blogData[currentLanguage] || [];
      const {darkMode} = useTheme()
      const themeClasses = getThemeClasses(darkMode)
    
      const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'Immune Boosters', name: t('categories.immuneBoosters') },
        { id: 'Skin & Hair Care', name: t('categories.skinAndHairCare') },
        { id: 'Digestive Health', name: t('categories.digestiveHealth') },
        { id: 'Diabetes & Blood Sugar', name: t('categories.diabetesAndBloodSugar') },
        { id: 'Heart Health', name: t('categories.heartHealth') },
        { id: 'Stress & Brain Health', name: t('categories.stressAndBrainHealth') },
        { id: 'Respiratory Health', name: t('categories.respiratoryHealth') },
        { id: 'Detox & Weight Loss', name: t('categories.detoxAndWeightLoss') },
      ];
    
      const filteredBlogs = selectedCategory === 'all' 
        ? blogs 
        : blogs.filter(blog => blog.category === selectedCategory);
    
  return (
     <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className={`text-3xl ${themeClasses.heading} mb-8`}>
        {t('categories.title')}
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blogs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No blogs found in this category.
          </p>
        </div>
      )}
    </div>
  )
}

export default Categories
