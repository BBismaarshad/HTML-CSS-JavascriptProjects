var arr = [
    { songName: "Flutter", url: "./songs/Flutter.mp3", img: "./images/flutter.jpg" },
    { songName: "Ghost", url: "./songs/ghost.mp3", img: "./images/ghost.jpg" },
    { songName: "Morning", url: "./songs/Morning.mp3", img: "./images/morning.jpg" },
    { songName: "Gray", url: "./songs/Grey.mp3", img: "./images/Gray.png" }
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var playBtn = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var audio = new Audio();
var selectedSong = 0;
var flag = 0;

function mainFunction() {
    var clutter = "";
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id="${index}">
                        <div class="part1">
                            <img src="${elem.img}" alt="">
                            <h2>${elem.songName}</h2>
                        </div>
                        <h6>40:30</h6>
                    </div>`;
    });

    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

// Click on song to play
allSongs.addEventListener("click", function (dets) {
    var card = dets.target.closest(".song-card");
    if (!card) return;
    selectedSong = card.id;
    mainFunction();
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    flag = 1;
    audio.play();
});

// Play / Pause button
playBtn.addEventListener("click", function () {
    if (flag === 0) {
        playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
        audio.play();
        flag = 1;
    } else {
        playBtn.innerHTML = `<i class="ri-play-circle-line"></i>`;
        audio.pause();
        flag = 0;
    }
});

// Forward button
forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        mainFunction();
        audio.play();
        flag = 1;
        playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    }
});

// Backward button
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        mainFunction();
        audio.play();
        flag = 1;
        playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    }
});
