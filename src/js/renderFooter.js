import { getLanguageFromLS } from './languageSwitch';

renderFooter ();

function renderFooter () {

    const footer = document.querySelector('.footer');
    const contEN = `
    <div class="container">
    <p class="footer-text">
        <span class="footer-text__up">&#169; 2022 | All Rights Reserved |</span> 
        <span class="footer-text__up">Developed with 
            <svg class="footer-text__icon" width="14" height="13"><use href="./images/sprite.svg#icon-heart"></use></svg>
            by <a class="footer-text__link" href="">GoIT Students</a></span>
    </p> 
    </div>`;
    
    const contUA = `
    <div class="container">
    <p class="footer-text">
        <span class="footer-text__up">&#169; 2022 | Всі права захищені |</span> 
        <span class="footer-text__up">Розроблено спільно 
            <svg class="footer-text__icon" width="14" height="13"><use href="./images/sprite.svg#icon-heart"></use></svg>
            з <a class="footer-text__link" href="">GoIT Students</a></span>
    </p> 
    </div>`;
    const currentLanguage = getLanguageFromLS();

    if (currentLanguage === "en-US") {
        return footer.innerHTML = contEN;
    }

    if (currentLanguage=== "uk-UA") {
        return (footer.innerHTML = contUA)
    }
}