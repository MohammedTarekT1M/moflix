window.onload = function() {
    let introVideo = document.querySelector("#introVideo");
    introVideo.onended = function() {
        document.querySelector("#intro").style.animation = "fadeOut 1s forwards";
    };
};
function playVideo(src) {
    let player = document.querySelector("#player");
    let videoPlayer = document.querySelector("#videoPlayer");
    player.src = src;
    videoPlayer.style.display = "flex";
    player.play();
}
function closeVideo() {
    let videoPlayer = document.querySelector("#videoPlayer");
    let player = document.querySelector("#player");
    player.pause();
    videoPlayer.style.display = "none";
}