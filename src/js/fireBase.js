// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, child, get } from 'firebase/database';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// const refs = {
//   signUpForm: document.querySelector('.sign-up__form'),
//   signUpButton: document.querySelector('.sign-up__button'),
//   userName: document.querySelector('#username'),
//   email: document.querySelector('#email'),
//   password: document.querySelector('#password'),
//   loginForm: document.querySelector('.login__form'),
//   loginPassword: document.querySelector('#login-password'),
//   loginEmail: document.querySelector('#login-email'),
//   logOut: document.querySelector('.logout__button'),
// };

// const firebaseConfig = {
//   apiKey: 'AIzaSyDI06G7ldPdrMhSq-FyX2L15PRQF0jVleY',
//   authDomain: 'filmoteka-project-f50cc.firebaseapp.com',
//   databaseURL: 'https://filmoteka-project-f50cc-default-rtdb.firebaseio.com',
//   projectId: 'filmoteka-project-f50cc',
//   storageBucket: 'filmoteka-project-f50cc.appspot.com',
//   messagingSenderId: '744226297338',
//   appId: '1:744226297338:web:8ad6c2023b760eb61bc043',
// };

// refs.signUpForm.addEventListener('submit', onSignUpSubmit);
// refs.loginForm.addEventListener('submit', onLoginSubmit);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();

// function onSignUpSubmit(e) {
//   e.preventDefault();

//   createUserWithEmailAndPassword(auth, refs.email.value, refs.password.value)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       set(ref(database, 'users/' + user.uid), {
//         username: refs.userName.value,
//         email: refs.email.value,
//       });
//       alert(`user created!`);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }

// function onLoginSubmit(e) {
//   e.preventDefault();

//   signInWithEmailAndPassword(auth, refs.email.value, refs.password.value)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//       const date = new Date();
//       update(ref(database, 'users/' + user.uid), {
//         last_login: date,
//       });

//       alert(`User logged in!`);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }

// const user = auth.currentUser;

// onAuthStateChanged(auth, user => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// refs.logOut.addEventListener('click', onLogOut);

// function onLogOut(e) {
//   signOut(auth)
//     .then(() => {
//       alert(`User logged out!`);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }
// //////////////////////////////////////////
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, child, get } from 'firebase/database';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// const refs = {
//   signupForm: document.querySelector('.sign-up__form'),
//   loginForm: document.querySelector('.login__form'),
//   name: document.querySelector('#nameInp'),
//   email: document.querySelector('#emailInp'),
//   username: document.querySelector('#userInp'),
//   password: document.querySelector('#passInp'),
//   submit: document.querySelector('#sub_btn'),
//   loginBtn: document.querySelector('#login__btn'),
// };

// const firebaseConfig = {
//   apiKey: 'AIzaSyDI06G7ldPdrMhSq-FyX2L15PRQF0jVleY',
//   authDomain: 'filmoteka-project-f50cc.firebaseapp.com',
//   databaseURL: 'https://filmoteka-project-f50cc-default-rtdb.firebaseio.com',
//   projectId: 'filmoteka-project-f50cc',
//   storageBucket: 'filmoteka-project-f50cc.appspot.com',
//   messagingSenderId: '744226297338',
//   appId: '1:744226297338:web:8ad6c2023b760eb61bc043',
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase();
// const auth = getAuth();
// // ------------------------------------------------------------VALIDATION-----------------------------------
// function isInputNotValidCheck(element) {
//   return element === null || element.match(/^ *$/) !== null;
// }

// function validation() {
//   let nameregex = /^[a-zA-Z]+$/;
//   let userregex = /^[a-zA-Z0-9]{5,}$/;

//   if (
//     isInputNotValidCheck(refs.name.value) ||
//     isInputNotValidCheck(refs.email.value) ||
//     isInputNotValidCheck(refs.username.value) ||
//     isInputNotValidCheck(refs.password.value)
//   ) {
//     alert('All inputs must be filled');
//     return;
//   }
//   if (refs.password.value.length < 6) {
//     alert('Password must be at least 6 characters long');
//     return;
//   }
//   if (!nameregex.test(refs.name.value)) {
//     alert('The name schould contain only letters!');
//     return false;
//   }
//   if (!userregex.test(refs.username.value)) {
//     alert('Bad username!');
//     return false;
//   }
//   return true;
// }
// // ----------------------------REGISTER TO FIREBASE----------------------------------
// function registerUser() {
//   if (!validation()) {
//     return;
//   }
//   const databaseRef = ref(database);
//   get(child(databaseRef, 'UsersList/' + refs.username.value)).then(snapshot => {
//     if (snapshot.exists()) {
//       alert('Account already exists');
//     } else {
//       set(ref(database, 'UsersList/' + refs.username.value), {
//         fullname: refs.name.value,
//         email: refs.email.value,
//         username: refs.username.value,
//         password: encPassword(),
//       })
//         .then(() => {
//           alert('User added successfully');
//         })
//         .catch(error => alert('Error' + error));
//     }
//   });
// }
// // -----------------------------------------------ADD SUBMIT-----------------------------------------------------------
// refs.signupForm.addEventListener('submit', onSignUpFormSubmit);
// refs.loginBtn.addEventListener('click', authenticateUser);

// function onSignUpFormSubmit(e) {
//   e.preventDefault();
//   registerUser();
// }

// // ------------------------------------------------------------------------ENCRYPTION----------------------------------------------------------------

// function encPassword() {
//   let pass12 = CryptoJS.AES.encrypt(refs.password.value, refs.password.value);
//   return pass12.toString();
// }

// // ---------------------------------------------------------------------LOG IN--------------------------------------------------
// // -----------------------------------------------------------------------------------------------------------------------------
// // ----------------------------------------------------------AUTHENTICATION PROCESS----------------------------------------------

// function authenticateUser(e) {
//   e.preventDefault();
//   const databaseRef = ref(database);
//   get(child(databaseRef, 'UsersList/' + refs.username.value)).then(snapshot => {
//     if (snapshot.exists()) {
//       let dbPass = decPassword(snapshot.val().password);
//       if (dbPass == refs.password.value) {
//         login(snapshot.val());
//       } else {
//         alert('User does not exist!');
//       }
//     } else {
//       alert('username or password is invalid');
//       //   set(ref(database, 'UsersList/' + refs.username.value), {
//       //     fullname: refs.name.value,
//       //     email: refs.email.value,
//       //     username: refs.username.value,
//       //     password: encPassword(),
//       //   })
//       //     .then(() => {
//       //       alert('User added successfully');
//       //     })
//       //     .catch(error => alert('Error' + error));
//     }
//   });
// }

// // -----------------------------------------------DECRIPT PROCESS---------------------------------
// function decPassword(dbPass) {
//   let pass12 = CryptoJS.AES.decrypt(dbPass, refs.password.value);
//   return pass12.toString(CryptoJS.enc.Utf8);
// }

// // -----------------------------------------------LOGIN---------------------------------------------------------

// function login(user) {
//   let keepLoggedIn = document.querySelector('#gridCheck').checked;
//   if (!keepLoggedIn) {
//     sessionStorage.setItem('user', JSON.stringify(user));
//     //   --------------------------
//     //   window.location="home.html"
//     //   ---------------------------
//   } else {
//     localStorage.setItem('keepLoggedIn', 'yes');
//     localStorage.setItem('user', JSON.stringify(user));

//     //   --------------------------
//     //   window.location="home.html"
//     //   ---------------------------
//   }
// }
// // 28:24

// // -----------------------------------------------FUNCTIONS-----------------------------------------------------------------
// let currentUser = null;

// function getUsername() {
//   let keepLoggedIn = localStorage.getItem('keepLoggedIn');

//   if (keepLoggedIn == 'yes') {
//     currentUser = JSON.parse(localStorage.getItem('user'));
//   } else {
//     currentUser = JSON.parse(sessionStorage.getItem('user'));
//   }
// }

// function signout() {
//   sessionStorage.removeItem('user');
//   localStorage.removeItem('user');
//   localStorage.removeItem('keepLoggedIn');
//   //   --------------------------
//   //   window.location="home.html"
//   //   ---------------------------
// }

// window.onload = function () {
//   getUsername();
//   if (currentUser == null) {
//     //   30:30
//   } else {
//     //   31:32
//   }
// };

// -----------------------------------------------Switch LOG IN AND SIGN UP---------------------------------------------

// const switchFormLinkLogin = document.querySelector('#switch-form__link-login');
// const switchFormLinkSignUp = document.querySelector(
//   '#switch-form__link-sign-up'
// );
// const signupOverlay = document.querySelector('.sign-up__overlay');
// const loginOverlay = document.querySelector('.log-in__overlay');

// switchFormLinkLogin.addEventListener('click', onChangeLinkClick);
// switchFormLinkSignUp.addEventListener('click', onChangeLinkClick);

// function onChangeLinkClick(e) {
//   e.preventDefault();
//   loginOverlay.classList.toggle('log-in__overlay--hidden');
//   signupOverlay.classList.toggle('sign-up__overlay--hidden');
// }
// --------------------------------------------------------------------------------
const switchFormLinkLogin = document.querySelector('#switch-form__link-login');
const switchFormLinkSignUp = document.querySelector(
  '#switch-form__link-sign-up'
);
const closeBtn = document.querySelector('.close__button');
const loginCloseBtn = document.querySelector('.close-login__button');
const signupOverlay = document.querySelector('.sign-up__overlay');
const loginOverlay = document.querySelector('.log-in__overlay');
const loginBtn = document.querySelector('.login__button');
const signupBtn = document.querySelector('.signup__button');

switchFormLinkLogin.addEventListener('click', onChangeLinkClick);
switchFormLinkSignUp.addEventListener('click', onChangeLinkClick);
closeBtn.addEventListener('click', onCloseModal);
loginCloseBtn.addEventListener('click', onCloseModal);
loginBtn.addEventListener('click', onLoginOpen);
signupBtn.addEventListener('click', onSignupOpen);

function onChangeLinkClick(e) {
  e.preventDefault();
  loginOverlay.classList.toggle('log-in__overlay--hidden');
  signupOverlay.classList.toggle('sign-up__overlay--hidden');
}

function onCloseModal(e) {
  loginOverlay.classList.add('log-in__overlay--hidden');
  signupOverlay.classList.add('sign-up__overlay--hidden');
}

function onLoginOpen(e) {
  loginOverlay.classList.remove('log-in__overlay--hidden');
}

function onSignupOpen(e) {
  signupOverlay.classList.remove('sign-up__overlay--hidden');
}
