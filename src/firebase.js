import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCvza3tyuVHPBYOlLuhWUVv3EI568oAuLQ',
  authDomain: 'myport-3e2f9.firebaseapp.com',
  projectId: 'myport-3e2f9',
  storageBucket: 'myport-3e2f9.appspot.com',
  messagingSenderId: '385793109850',
  appId: '1:385793109850:web:58ac20f8d6c7d84c068d63',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
