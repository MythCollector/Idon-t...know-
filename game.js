let power = 100;
let time = 0; // minutes past midnight
const clockElem = document.getElementById("clock");
const powerElem = document.getElementById("power");
const jumpscare = document.getElementById("jumpscare");

function updateClock() {
  time++;
  let hours = 12 + Math.floor(time / 60);
  let minutes = time % 60;
  clockElem.textContent = `${hours}:${minutes.toString().padStart(2,'0')} AM`;
  
  if (Math.random() < 0.01) triggerJumpscare(); // random AI
}

function drainPower() {
  power -= 0.1;
  powerElem.textContent = `Power: ${Math.floor(power)}%`;
}

function triggerJumpscare() {
  jumpscare.style.display = "block";
  alert("GAME OVER! Candy got you!");
  location.reload();
}

setInterval(updateClock, 1000); // 1 sec = 1 min
setInterval(drainPower, 5000); // drain power every 5 sec
