import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import { useTheme } from "./Context/ThemeContext.jsx";
import { getThemeClasses } from "./utils/theme.js";
import { Helmet } from "react-helmet";

function App() {
  const { darkMode } = useTheme();
  const themeClasses = getThemeClasses(darkMode);

  return (
    <div className={`${themeClasses.mainContainer}`}>
      <div
        className={`min-h-screen ${themeClasses.mainContainer} transition-colors`}
      >
        <Router>
          <Header />
          <Helmet>
            <title>Jeevan Veda - Herbal Health Guide</title>
            <meta
              name="description"
              content="Explore the amazing health benefits of herbal remedies."
            />
            <link rel="canonical" href="http://localhost:3000/" />
          </Helmet>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
