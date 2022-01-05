import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import './styles/index.css';

const video = document.querySelector("video");
const togglePlay: HTMLElement  = document.querySelector("button.togglePlay");
const toggleMute: HTMLElement = document.querySelector("button.toggleMute");

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
