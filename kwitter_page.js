const firebaseConfig = {
    apiKey: "AIzaSyBX5_1-cBP_ZZ_An_wpXssegfm1cqLZoJg",
    authDomain: "kwitter-a91e8.firebaseapp.com",
    databaseURL: "https://kwitter-a91e8-default-rtdb.firebaseio.com",
    projectId: "kwitter-a91e8",
    storageBucket: "kwitter-a91e8.appspot.com",
    messagingSenderId: "797333851226",
    appId: "1:797333851226:web:17cbabc71dc9f6342a5c63"
  };
  

  firebase.initializeApp(firebaseConfig);
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="kwitter.html";
  }