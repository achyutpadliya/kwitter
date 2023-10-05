var firebaseConfig = {
      apiKey: "AIzaSyB-rzDG9TNWvuHrRuuMctr85WDro8G41kY",
      authDomain: "instabook-c3b15.firebaseapp.com",
      databaseURL: "https://instabook-c3b15-default-rtdb.firebaseio.com",
      projectId: "instabook-c3b15",
      storageBucket: "instabook-c3b15.appspot.com",
      messagingSenderId: "728501975106",
      appId: "1:728501975106:web:a006581395715c5a0b95db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("ot").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name :-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("ot").innerHTML += row;
                  //End code
            });
      });
}
getData();

usn = localStorage.getItem("usn");
document.getElementById("usn").innerHTML = "Welcome " + usn;

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("usn")
      localStorage.removeItem("room_name")
      window.location = "index.html";
}