import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";
import './styles/index.css';

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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../src/serviceWorker.js").catch((error) => {
    console.log(error);
  });
}
