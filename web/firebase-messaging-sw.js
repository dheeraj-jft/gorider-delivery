importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCOtgF0E7iGuq2ZoIvo4mNQl1-K_WHlBk8",
      authDomain: "goorderbiz-74571.firebaseapp.com",
      projectId: "goorderbiz-74571",
      storageBucket: "goorderbiz-74571.appspot.com",
      messagingSenderId: "455620224473",
      appId: "1:455620224473:web:95b86139a2543b91c425c8",
      measurementId: "G-0LMCSHT2LX"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});