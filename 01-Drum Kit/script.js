const sounds = {
  boom: new Audio("assets/sounds/boom.wav"),
  clap: new Audio("assets/sounds/clap.wav"),
  hihat: new Audio("assets/sounds/hihat.wav"),
  kick: new Audio("assets/sounds/kick.wav"),
  openhat: new Audio("assets/sounds/openhat.wav"),
  ride: new Audio("assets/sounds/ride.wav"),
  snare: new Audio("assets/sounds/snare.wav"),
  tink: new Audio("assets/sounds/tink.wav"),
  tom: new Audio("assets/sounds/tom.wav"),
};

// Get button from key press
function getButton(e) {
  return document.querySelector(`[data-key="${e.code}"]`);
}
// Play sound
function playSound(button) {
  const id = button.id;
  const sound = sounds[id];
  sound.currentTime = 0;
  sound.play();
}
// Animate on play
function animateButton(button) {
  button.classList.add("playing");

  button.addEventListener("transitionend", () => {
    button.classList.remove("playing");
  });
}

// Main listener
document.addEventListener("keydown", (e) => {
  const button = getButton(e);
  if (!button) return;

  playSound(button);
  animateButton(button);
});
