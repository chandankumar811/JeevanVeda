import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import { useTheme } from "../Context/ThemeContext.jsx";
import { getThemeClasses } from "../utils/theme.js";
import { Helmet } from "react-helmet";

const BlogCard = ({ blog, featured = false }) => {
  const { darkMode } = useTheme();
  const themeClasses = getThemeClasses(darkMode);
  const { t } = useLanguage();

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className={`${themeClasses.container} rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer block ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`aspect-video overflow-hidden ${themeClasses.imageFrame}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
            {blog.category}
          </span>
          <time className={`${themeClasses.date}`}>
            {new Date(blog.date).toLocaleDateString()}
          </time>
        </div>
        <h3
          className={`${themeClasses.heading} mb-2 line-clamp-2 ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {blog.title}
        </h3>
        <p className={`${themeClasses.paragraph} mb-4 line-clamp-3`}>
          {blog.excerpt}
        </p>
        <span className="text-green-600 dark:text-green-400 text-sm font-medium hover:text-green-700 dark:hover:text-green-300">
          {t("home.readMore")} →
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
