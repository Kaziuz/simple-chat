import { auth } from "../services/firebase"

/* 
  https://firebase.google.com/docs/auth/web/password-auth
  creamos un usuario
*/
export function signup(email, password) {
  let query = new Promise((res, rej) => {
    res(auth().createUserWithEmailAndPassword(email, password))
    rej(error => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorMessage, errorCode }
    })
  })
  return query
}

/*
  signInWithEmailAndPassword: https://firebase.google.com/docs/auth/web/password-auth
  Iniciamos sesion de un usuario
*/
export function signin(email, password) {
  let query = new Promise((res, rej) => {
    res(auth().signInWithEmailAndPassword(email, password))
    rej(error => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorMessage, errorCode }
    })
  })
  return query
}

// strategias para loguearse con gmail
// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/GoogleAuthProvider
export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

// estrategias para loguearse con acebook
// https://firebase.google.com/docs/auth/web/facebook-login
export function signInWithFacebook() {
  const provider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(provider)
    .then(result => {
      // this gives you a facebook access token.
      // this token use for access the facebook api
      const token = result.credential.accessToken
      const user = result.user

      console.log('token user facebook', token)
      console.log('user', user)
    })
    .catch(err => {
      // const errorCode = error.code
    });
}

export function signInWithTwitter() {
  console.log('ejecuto with twitter')
  const provider = new auth.TwitterAuthProvider();
  return auth().signInWithPopup(provider)
    .then(result => {
      // this gives you a facebook access token.
      // this token use for access the facebook api
      const token = result.credential.accessToken
      const user = result.user

      console.log('token user twitter', token)
      console.log('user', user)
    })
    .catch(error => {
      const errorCode = error.code
      console.log('error auth', errorCode)
    });
}

export function logout() {
  return auth().signOut();
}
