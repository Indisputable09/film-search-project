import { Movie } from "./fetchMovie";
import { getLanguageFromLS } from "./languageSwitch";

export function currentLangString({ enString, uaString }) {
    const lang = getLanguageFromLS();
    if (lang === Movie.language.ENGLISH) {
       return `${enString}`;
    } else if (Movie.language.UKRAINIAN === lang) {
     return `${uaString}`;
    }
}