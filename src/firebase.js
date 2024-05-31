import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
/* export const analytics = getAnalytics(app); */

export async function uploadFile(files, postName) {
  if (files.length === 0) {
    console.log("No file selected");
    return;
  }

  const file = files[0]; // ACA ABAJO SE CAMBIA LA CARPETA DE LA DB
  const storageRef = ref(storage, `post/${file.name}`);

  const metadata = {
    contentType: file.type, // Set the correct content type
  };

  await uploadBytes(storageRef, file, metadata)
  const url = await getDownloadURL(storageRef)
  return url

}
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);