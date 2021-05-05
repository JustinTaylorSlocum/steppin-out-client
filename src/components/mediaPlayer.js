const musicPath = "src\\music\\";

const trackList = ["01-Steppin-Out-Demo-Intro.m4a"];

var currentTrack = 0;

var player = new Audio(musicPath + trackList[0]);


function play() {
    player.play();
}

function pause() {
    player.pause();
}

function nextTrack() {
    if (currentTrack < trackList.length - 1) {
        currentTrack += 1;
        playSong(trackList[currentTrack]);
    } else {
        currentTrack = 0;
        playSong(trackList[currentTrack]);
    }
}

function prevTrack() {
    if (currentTrack !== 0) {
        currentTrack -= 1;
        playSong(trackList[currentTrack]);
    } else {
        currentTrack = trackList.length - 1;
        playSong(trackList[currentTrack]);
    }
}

function playSong(song) {
    player.src = musicPath + song;
    player.play();
}