function switchCamera(direction) {
  const feed = document.getElementById("camera-feed");
  if (direction === "left") {
    feed.textContent = "You see Candy lurking on the left...";
  } else if (direction === "right") {
    feed.textContent = "The right hallway is empty... for now.";
  }
}
