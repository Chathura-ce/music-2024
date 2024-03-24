import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/*
const firebaseConfig = {
  apiKey: "AIzaSyDvF17Y5ApfuVBSm_bemsZYoPrNVUT1r2s",
  authDomain: "music-temp-2a2ab.firebaseapp.com",
  projectId: "music-temp-2a2ab",
  storageBucket: "music-temp-2a2ab.appspot.com",
  appId: "1:513389509498:web:f976453109bb87de1034c3",
};
*/
const firebaseConfig = {
  apiKey: 'AIzaSyAu2iITlAp3eY8dJjBgpU8mNF0taQEaR6w',
  authDomain: 'learn-v.firebaseapp.com',
  projectId: 'learn-v',
  storageBucket: 'learn-v.appspot.com',
  appId: '1:939159597276:web:555d82bd96906b4cfa0419'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
