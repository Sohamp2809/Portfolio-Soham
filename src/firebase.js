// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app"; // Initialize Firebase
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAnalytics, logEvent } from "firebase/analytics"; // Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-PK8WY2H0TQ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Function to log page view
function logPageView() {
  logEvent(analytics, "page_view"); // Logs a page view event
}

// Export Firestore and Analytics, along with the log function
export { db, analytics, logPageView };
