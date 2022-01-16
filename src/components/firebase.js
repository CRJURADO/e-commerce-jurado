import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD4q2Z2uPCICVdZ8SbWQUosaEWYqxRK9K0",
    authDomain: "e-comerce-cjurado.firebaseapp.com",
    projectId: "e-comerce-cjurado",
    storageBucket: "e-comerce-cjurado.appspot.com",
    messagingSenderId: "631271659507",
    appId: "1:631271659507:web:cd5c9638eb29d11c9c6486"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)