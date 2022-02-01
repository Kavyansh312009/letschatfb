var firebaseConfig = {
    apiKey: "AIzaSyBueIKqchMWpJqvPsewhQeF7pKEXU8McpQ",
    authDomain: "kwitter-c6920.firebaseapp.com",
    databaseURL: "https://kwitter-c6920-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6920",
    storageBucket: "kwitter-c6920.appspot.com",
    messagingSenderId: "1019309130854",
    appId: "1:1019309130854:web:ca25a266bbbee2cfbf59a7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
  }