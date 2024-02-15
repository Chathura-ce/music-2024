import firebase from 'firebase/app' //core of the firebase
import 'firebase/auth' //authentication module

//firebase configurations
const firebaseConfig = {
  apiKey: 'AIzaSyAu2iITlAp3eY8dJjBgpU8mNF0taQEaR6w',
  authDomain: 'learn-v.firebaseapp.com',
  projectId: 'learn-v',
  storageBucket: 'learn-v.appspot.com',
  appId: '1:939159597276:web:555d82bd96906b4cfa0419'
}

//initialize firebase
export default firebase.initializeApp(firebaseConfig)
