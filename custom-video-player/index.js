const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class='bx bx-play'></i>";
  } else {
    play.innerHTML = "<i class='bx bx-pause'></i>";
  }
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < video.duration) {
    mins = '0' + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < video.duration) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

video.addEventListener('click', toggleVideo);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideo);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
