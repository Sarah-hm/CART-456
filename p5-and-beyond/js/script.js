// This third option shows how to embed P5 with vanilla javascript to use the best of both worlds:
// 3) Using the HTML tags and native JavaScript event listeners, create a command board in vanilla JavaScript and its game visualization in P5.js

let playerPosX = window.innerWidth / 2; //places the player in the middle of the window

// The canvas is an HTML tag (like a div or a button), hence could be created natively on our index.html file.
// However, if we want to draw on it using P5, we should create it using the library.
function setup() {
  // Store it in a constant, so we can access it later

  // const canvas = createCanvas(windowWidth, windowHeight / 2);

  const canvas = createCanvas(
    windowWidth,
    windowHeight / 2,
    document.getElementById("our-canvas")
  );
}

function draw() {
  background(210);
  drawThePlayer();
}

function drawThePlayer() {
  // [Something a little bit more visually pleasing to insert here]
  push();
  fill(5);
  strokeWeight(6);
  stroke("aqua");
  ellipse(playerPosX, 250, 50);
  pop();
}

function moveLeft() {
  playerPosX = playerPosX - 10;
}

function moveRight() {
  playerPosX = playerPosX + 10;
}

function doSomethingElse() {
  document.getElementById("a-new-element").classList.toggle("hide-the-element");
}
