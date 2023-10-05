function addUser(){
    usn=document.getElementById("usn").value;
    localStorage.setItem("usn",usn);
    window.location="kwitter_room.html";
}