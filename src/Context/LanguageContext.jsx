import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations.js";
const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");


    const t = (key) => {
        const keys = key.split(".");
        let value = translations[currentLanguage];
        for (const k of keys) value = value?.[k];
        return value || key;
    }

    return(
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}