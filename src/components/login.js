import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "/Index.html"; // Redirect after successful login
    } catch (error) {
        let errorMessage = "Login failed. Please try again.";
        switch (error.code) {
            case "auth/invalid-email":
                errorMessage = "Invalid email address.";
                break;
            case "auth/user-not-found":
                errorMessage = "No account found with this email.";
                break;
            case "auth/wrong-password":
                errorMessage = "Invalid password.";
                break;
        }
        alert(errorMessage);
    }
});
