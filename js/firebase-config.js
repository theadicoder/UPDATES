import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNMwf-hrP2PLvJ6qubXV2ILLjAbcwSbyw",
    authDomain: "auth-4ac21.firebaseapp.com",
    projectId: "auth-4ac21",
    storageBucket: "auth-4ac21.firebasestorage.app",
    messagingSenderId: "415327194439",
    appId: "1:415327194439:web:692452c3e77d4da76c1062",
    measurementId: "G-50YMS5DTY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
