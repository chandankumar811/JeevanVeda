import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "../Context/LanguageContext";
import { useTheme } from "../Context/ThemeContext";
import { getThemeClasses } from "../utils/theme";
import { Facebook, Lamp, MessageCircle, Share } from "lucide-react";
import { Helmet } from "react-helmet";
import blogData from "../data/blogData.js"; // adjust path if needed

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const { darkMode } = useTheme();
  const themeClasses = getThemeClasses(darkMode);

  const blog = blogData[currentLanguage].find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        Blog not found. <br />
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-green-600 hover:underline"
        >
          ← Go back to Home
        </button>
      </div>
    );
  }

  console.log(blog.description);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`http://localhost:5173/blog/${blog.slug}`} />
      </Helmet>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
      >
        ← Back
      </button>

      <article
        className={`${themeClasses.container} rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden`}
      >
        <div
          className={`aspect-video ${themeClasses.imageFrame} overflow-hidden`}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-3 py-1 rounded">
              {blog.category}
            </span>
            <time className={`${themeClasses.date}`}>
              {new Date(blog.date).toLocaleDateString()}
            </time>
          </div>
          <h1 className={` ${themeClasses.heading} text-3xl mb-6`}>
            {blog.title}
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <div
              className={`${themeClasses.paragraph} leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
            <h3 className={`${themeClasses.subHeading} mb-4`}>
              {t("blog.share")}
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook size={16} />
                <span>Facebook</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Share size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
