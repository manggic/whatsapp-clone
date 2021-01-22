
import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyCQ-AWKIQXw1NHO3bs1hNy7oUPiiOHX2zo",
    authDomain: "whatsapp-clone-40d60.firebaseapp.com",
    projectId: "whatsapp-clone-40d60",
    storageBucket: "whatsapp-clone-40d60.appspot.com",
    messagingSenderId: "923380519441",
    appId: "1:923380519441:web:93d56e0d2ff1244e43d7b0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()
 const provider =    new firebase.auth.GoogleAuthProvider()
export { auth, provider}
export default db
