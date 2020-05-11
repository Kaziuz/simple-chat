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

// estrategias para loguearse con github
// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/GithubAuthProvider
export function signInWithGitHub() {
  // const provider = new auth.GithubAuthProvider();
  // return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}
