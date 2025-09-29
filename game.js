// game.js
let power = 100;
let time = 0; // minutes past midnight
const clockElem = document.getElementById("clock");
const powerElem = document.getElementById("power");
const jumpscare = document.getElementById("jumpscare");
const jumpscareSound = document.getElementById("jumpscare-sound");

function updateClock() {
  time++;
  let hours = 12 + Math.floor(time / 60);
  let minutes = time % 60;
  clockElem.textContent = `${hours}:${minutes.toString().padStart(2,'0')} AM`;

  if (Math.random() < 0.01) triggerJumpscare();
}

function drainPower() {
  power -= 0.1;
  if (power < 0) power = 0;
  powerElem.textContent = `Power: ${Math.floor(power)}%`;
}

function switchCamera(cam) {
  const feed = document.getElementById("camera-feed");
  feed.textContent = `Viewing ${cam.toUpperCase()}...`;
}

function triggerJumpscare() {
  jumpscare.style.display = "block";
  jumpscareSound.play();
  setTimeout(() => alert("GAME OVER! Candy got you!"), 100);
  setTimeout(() => location.reload(), 2000);
}

setInterval(updateClock, 1000); // 1 sec = 1 minute
setInterval(drainPower, 5000);   // power drains every 5 sec
