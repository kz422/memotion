import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

if (!firebase.apps.length) {
const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: "1:546880337916:web:b7da8e17148865c8252479",
  measurementId: "G-PS3PSHQL0C"
}
  firebase.initializeApp(config);
  firebase.analytics();
}

const db = firebase.firestore()
export {
  firebase,
  db
}
