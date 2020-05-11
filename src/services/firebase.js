import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/messaging'

const config = {
  apiKey: process.env.REACT_APP_FIREBS_API_KEY,
  authDomain: process.env.REACT_APP_FIREBS_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBS_DATA_BASEURL,
  projectId: process.env.REACT_APP_FIREBS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBS_APP_ID,
  measurementId: process.env.REACT_APP_FIREBS_MEASUREMENT_ID
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const auth = firebase.auth
export const messaging = firebase.messaging()

