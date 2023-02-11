// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATMkoo4ahf7cV6MPfAYD7oJ0XxHwfWtQA',
  authDomain: 'test-a5887.firebaseapp.com',
  projectId: 'test-a5887',
  storageBucket: 'test-a5887.appspot.com',
  messagingSenderId: '70244208165',
  appId: '1:70244208165:web:5a11f26bd415ef45f379cc'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()
