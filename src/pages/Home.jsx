import React from "react";
import { useLanguage } from "../Context/LanguageContext";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { useTheme } from "../Context/ThemeContext";
import { getThemeClasses } from "../utils/theme";
import { Helmet } from "react-helmet";

const Home = ({onBlogClick}) => {
  const {t, currentLanguage} = useLanguage();
  const blogs = blogData[currentLanguage] || [];
  const featuredBlogs = blogs.filter(blog => blog.featured);
  const recentBlogs = blogs.filter(blog => !blogs.featured).slice(0, 6);
  const {darkMode} = useTheme()
  const themeClasses = getThemeClasses(darkMode)
  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content={"This is home page"}/>
      </Helmet>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={`${themeClasses.heading} text-4xl md:text-5xl  mb-4`}>
          {t("home.title")}
        </h1>
        <p className={`text-xl ${themeClasses.paragraph} max-w-3xl mx-auto`}>
          {t("home.subtitle")}
        </p>
      </div>

      {/* Featured Articles */}
      {featuredBlogs.length > 0 && (
        <section className="mb-12">
          <h2 className={` text-2xl ${themeClasses.heading} mb-6`}>
            {t("home.featured")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => onBlogClick(blog)}
                featured={true}
              />
            ))}
          </div>
        </section>
      )}

      {/* Recent Blogs */}
      {recentBlogs.length > 0 && (
        <section>
          <h2 className={`text-2xl ${themeClasses.heading} mb-6`}>
            {t("home.recent")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => onBlogClick(blog)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
