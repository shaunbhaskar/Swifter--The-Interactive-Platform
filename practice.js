 var firebaseConfig = {
    apiKey: "AIzaSyCt6Wt-k2kE_PwsdaX-9ewD4fOJ4GyVigE",
    authDomain: "swifter-the-interactive.firebaseapp.com",
    projectId: "swifter-the-interactive",
    storageBucket: "swifter-the-interactive.appspot.com",
    messagingSenderId: "688441613714",
    appId: "1:688441613714:web:25c68d38902207dbba754b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  firebase.initializeApp(firebaseConfig);
  function adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({purpose:"Adding User"});
}
