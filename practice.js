 var firebaseConfig = {
    apiKey: "AIzaSyA-O8dgTT-nb-X9ed0YumLH4BOyHSxogm4",
    authDomain: "swifter-66672.firebaseapp.com",
    databaseURL: "https://swifter-66672-default-rtdb.firebaseio.com",
    projectId: "swifter-66672",
    storageBucket: "swifter-66672.appspot.com",
    messagingSenderId: "56010265469",
    appId: "1:56010265469:web:44d9c654516104bd443214"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  firebase.initializeApp(firebaseConfig);
  function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({purpose:"Adding User"});
}
