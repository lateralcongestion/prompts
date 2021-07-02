var firebaseConfig = {
apiKey: "AIzaSyAcsMt473vLZY07Wx9E9qVcvefcElLv_TY",
authDomain: "okay-5917b.firebaseapp.com",
projectId: "okay-5917b",
storageBucket: "okay-5917b.appspot.com",
messagingSenderId: "501106360406",
appId: "1:501106360406:web:4ca3cb7c321e9126b63bf7"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database()

function save() {
  var prompt = document.getElementById('prompt').value.replace(/\n/g, "<br>")
  var userID = document.getElementById('username').value

  database.ref('users/' + userID).set({
    userID:userID,
    prompt : prompt,
    frompage: location.pathname,
    when:firebase.database.ServerValue.TIMESTAMP
  })
  alert('Saved')
}

console.log(prompt)

var prompts = 
[
"you hear grunting as you slowly walk down the stairs",
"a dragon crawls behind you asking for food",
"'how was your day?' asked the skeleton",
"as you peer into his eyes, it opens and spiders crawl out",
"How was your night?", 
"what did GOD just say?"
];

function prose(){
    let x = (prompts[Math.floor(Math.random() * prompts.length)]);
    document.getElementById("words").innerHTML = x;
}
//function is clicked and triggers

//countdown from 5 minutes.
var seconds = 300

fiveMins = setInterval( function() {
    if (seconds ==1){
        document.getElementById("timer").innerHTML ="STOP";
    }else{
        seconds--;
        document.getElementById("timer").innerHTML = seconds + " seconds left"
        }
}, 1000)
