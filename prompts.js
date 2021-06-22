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
    document.getElementById("prompt").innerHTML = x;
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
