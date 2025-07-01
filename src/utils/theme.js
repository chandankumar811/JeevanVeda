export const getThemeClasses = (darkMode) => ({
  mainContainer: darkMode ? "bg-gray-900" : "bg-gray-50",
  container: darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900",
  subContainer: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
  heading: ` ${darkMode ? "text-white text-gray-900" : ""} font-bold`,
  subHeading: `${
    darkMode ? "text-white" : "text-gray-900"
  } text-lg font-semibold`,
  imageFrame: darkMode ? "bg-gray-700" : "bg-gray-200",
  date: `${darkMode ? "text-gray-400" : "text-gray-500"} text-xs`,
  paragraph: `${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`,
  navbar: darkMode
    ? " text-white hover:text-green-400": " text-gray-800 hover:text-green-600",

    languageSwitcher:{
        conatianer: darkMode? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
        button: `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`
    }
});
