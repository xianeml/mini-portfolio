var img = document.querySelector('#img');
var mesg = document.querySelector('#message');
var imges = ["img.jpg", "img2.jpg", "img3.jpg"];
var audio = new Audio("./music/music1.mp3");
var audioList = ["music1.mp3", "music2.mp3", "music3.mp3"];

var i = 0;
function before() {
    --i;
    if(i<0){
        i = 2;
    }
    img.src = imges[i];
    audio.src = "./music/"+audioList[i];
    play();
}

function next() {
    ++i;
    if(i>=3){
        i=0;
    }
    img.src = "./" + imges[i];
    audio.src = "./music/"+audioList[i];
    audio.play();
}

function play(){
    audio.play();
    var name = 
    mesg.innerHTML = "<Marquee width=\"350\" scrollamount=\"4\">🤍 Playing Now 🤍</Marquee>";
}

function pause(){
    audio.pause();
    mesg.innerHTML = "Pause ⏸";
}
