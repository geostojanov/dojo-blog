import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQkVu6XI5VpUw3dGzerwYeXs64KHJ1wKM",
  authDomain: "netninja-vue-sites.firebaseapp.com",
  projectId: "netninja-vue-sites",
  storageBucket: "netninja-vue-sites.appspot.com",
  messagingSenderId: "114244171265",
  appId: "1:114244171265:web:8682ff61945b4e85c63200"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()


export { projectFirestore }