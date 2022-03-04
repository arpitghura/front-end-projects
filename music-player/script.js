let song = new Audio("BHOLENATH SUMIT GOSWAMI.mp3")
let songTitle = document.getElementById("songTitle")
let songAuthor = document.getElementById("songAuthor")
let songProgress = document.getElementById("songProgress")
let seekBack = document.getElementById("seekBack")
let seekNext = document.getElementById("seekNext")
let playPause = document.getElementById("playPause")
let oldTitle = document.title;

songTitle.innerText = "BHOLENATH SUMIT GOSWAMI";
songAuthor.innerText = "Sumit Goswami";
songProgress.value = "40";

playPause.addEventListener("click",()=>{
    if (playPause.children[0].classList.contains("fa-play")) {
        song.play();
        playPause.children[0].classList.remove("fa-play");playPause.children[0].classList.add("fa-pause");
        document.title = songTitle.innerText + " | Music Player";
    } else {
        song.pause();
        playPause.children[0].classList.remove("fa-pause");
        playPause.children[0].classList.add("fa-play");
        document.title = oldTitle;
    }
})