
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCbSDSSJgtGxPSOH2Y8ZxaGNRY1dHpCBtw",
    authDomain: "kwitter-90f45.firebaseapp.com",
    databaseURL: "https://kwitter-90f45-default-rtdb.firebaseio.com",
    projectId: "kwitter-90f45",
    storageBucket: "kwitter-90f45.appspot.com",
    messagingSenderId: "508799839539",
    appId: "1:508799839539:web:98eb31e92e3b38b9362246",
    measurementId: "G-HJ54FPFMP1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({purpose : "adding user"});
  }