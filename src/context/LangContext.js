import React, { useContext } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

export const LangContext = React.createContext();

const dictionaries = { en, es };

function resolve(dict, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
}

export function useLang() {
    const [lang, setLang] = useContext(LangContext);
    const dict = lang ? dictionaries.en : dictionaries.es;

    const t = (path) => resolve(dict, path) ?? path;

    return { lang, setLang, t };
}
