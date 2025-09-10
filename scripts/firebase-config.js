// scripts/firebase-config.js
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDnttfMZEGYfXksxjvWJWTgPkJCgeyglOA",
    authDomain: "rosscos-karaoke.firebaseapp.com",
    projectId: "rosscos-karaoke",
    storageBucket: "rosscos-karaoke.firebasestorage.app",
    messagingSenderId: "838114183982",
    appId: "1:838114183982:web:ca4916a95c16476b6a08bf",
    measurementId: "G-4SL232YLXC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
