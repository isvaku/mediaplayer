class MediaPlayer {
  plugins: any;
  media: HTMLMediaElement;
  container: HTMLElement;
  constructor(config: { el: HTMLMediaElement; plugins: any; }) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
