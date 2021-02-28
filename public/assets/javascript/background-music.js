document.addEventListener("DOMContentLoaded", event => {
	const playButton = document.querySelector("#play-music");

	const music = new Audio('./assets/audio/The Script - Hall Of Fame.mp3');

	playButton.addEventListener('click', (event) => {
		event.preventDefault();

		if (music.duration > 0 && !music.paused) {
			music.pause();
		} else {
			music.play();
		}
	});
});