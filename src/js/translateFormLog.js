import { refs } from "./authAndLogIn";
import { currentLangString } from "./currentLangString";
import { switchFormLinkLogin, switchFormLinkSignUp } from './switchSignInForms';

const refsFormLog = {
    logInTitle: document.querySelector('.js-logInTitle'),
    logOutTitle: document.querySelector('.js-logOutTitle'),
    SignUpForm: document.querySelector('.sign-up__form'),
    SignUpTitle: document.querySelector('.sign-up__title'),
}

export function translateLogOutText() {
    const logoutText = currentLangString({ enString: 'You are logged in as', uaString: 'Ви увійшли як' });
    let username = localStorage.getItem('keep_logged_as');
    refs.logoutText.innerHTML = `${logoutText} ${username}`;    
    refs.logoutBtn.textContent = currentLangString({ enString: 'Log Out', uaString: 'Вийти' });
    refs.loginBtn.textContent = currentLangString({ enString: 'Log In', uaString: 'Увійти' });
    if (refsFormLog.logInTitle.textContent === 'Log In' || refsFormLog.logInTitle.textContent === 'Вхід') {
        refsFormLog.logInTitle.textContent =  currentLangString({ enString: 'Log In', uaString: 'Вхід' })
    }
    if (refsFormLog.logOutTitle.textContent === 'Log Out' || refsFormLog.logOutTitle.textContent === 'Вихід') {
           refsFormLog.logOutTitle.textContent =  currentLangString({ enString: 'Log Out', uaString: 'Вихід' })
    }
    refs.loginForm[0].placeholder = currentLangString({ enString: 'Username', uaString: 'Псевдонім' });
    refs.loginForm[1].placeholder = currentLangString({ enString: 'Email', uaString: 'Електронна пошта' });
    refs.loginForm[2].placeholder = currentLangString({ enString: 'Password', uaString: 'Пароль' });
    switchFormLinkLogin.textContent = currentLangString({ enString: 'Want to create a new account?', uaString: 'Бажаєте створити новий акаунт?' });
}

export function translateSignUpText() {
    refsFormLog.SignUpTitle.textContent = currentLangString({ enString: 'Sign Up', uaString: 'Реєстрація' });
    refsFormLog.SignUpForm[0].placeholder = currentLangString({ enString: 'Email', uaString: 'Електронна пошта' });
    refsFormLog.SignUpForm[1].placeholder = currentLangString({ enString: 'Password', uaString: 'Пароль' });
    refs.signupBtn.textContent = currentLangString({ enString: 'Sign Up', uaString: 'Зареєструватися' });
    switchFormLinkSignUp.textContent = currentLangString({ enString: 'Already have an account?', uaString: 'Вже є аккаунт?' });
}