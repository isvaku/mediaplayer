import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const togglePlay = document.querySelector("button.togglePlay");
const toggleMute = document.querySelector("button.toggleMute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

togglePlay.onclick = function () {
  player.togglePlay();
};

toggleMute.onclick = function () {
  player.toggleMute();
};
