import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAg_NHbx0PbSq9b3Ibs34QezGZr4qVPKi4",
  authDomain: "crwn-db-173d6.firebaseapp.com",
  databaseURL: "https://crwn-db-173d6.firebaseio.com",
  projectId: "crwn-db-173d6",
  storageBucket: "crwn-db-173d6.appspot.com",
  messagingSenderId: "362042326018",
  appId: "1:362042326018:web:e6212e2a3cae6b0b2abb1b",
  measurementId: "G-W578CRQ42J"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
