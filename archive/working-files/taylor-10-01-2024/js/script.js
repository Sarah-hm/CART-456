/**
 * Project 2
 * Taylor McArthur
 *
 * This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a small yet meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there.
 */

"use strict";

let font;
//Title Variables
let state = `title`; //The beginning of the pleiades
let titleColorA, titleColorB; //defining variables for two different colors
let titleMix = 0; // mixing the two colors together
let titleEasing = 0.05; // 1.o to 0

//Stars Variables
let stars = []; //Create an empty box for stars to go into
let starsNum = 9; // create a star array
let starSizes = []; // Varied star sizes

//Create a random star size between the two values
for (let i = 0; i < starsNum; i++) {
  let size = Math.random() * (25 - 10) + 10;
  starSizes.push(size);
}

let pleiadesStars = {
  pleione: { x: 600, y: 450, size: 10 },
  atlas: { x: 595, y: 400, size: 15 },
  alcyone: { x: 710, y: 440, size: 5 },
};

let otherClusterStars = {
  star1: { x: 0, y: 0, size: 0 },
};

// let song;
// let amplitude;

//Description of preload
function preload() {
  // fix spaces in font, github
  font = loadFont("assets/Nexa Bold.otf");
}

//Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  // Font title color gradient
  textFont(font);
  titleColorA = color("#ffeda0"); // warm colour 1
  titleColorB = color("#ffa585"); // warm color 2

  // // heartbeat sound
  // song = loadSound('assets/sounds/heartbeat.mp3');
  // amplitude = new p5.Amplitude();
  // amplitude.setInput(song);
}

//Description of draw()
function draw() {
  background(253, 92, 4.9); //dark purple color

  // Gradient lerp for title
  let titleMixTarget = map(mouseX, 0, width, 0.0, 1.0);

  titleMix = titleMix + (titleMixTarget - titleMix) * titleEasing;

  let titleEasedColor = lerpColor(titleColorA, titleColorB, titleMix);

  // Creating different states
  if (state === `title`) {
    title(titleEasedColor);
  } else if (state === `writeUp`) {
    writeUp();
  } else if (state === "pleiades") {
    noStroke();
    new Cluster(pleiadesStars);
    // pleiades();
  } else if (state === "allClusters") {
    new Cluster(pleiadesStars);
    new Cluster(bearStars);
  }
}

function noiseLine(x, y) {
  let c = 100;
  let px = x;
  let py = y;

  for (let i = 0; i < c; i++) {
    let scl = 0.0015;
    let angle = noise(x * scl, y * scl, i * 0.00001) * 10;
    let w = map(i, 0, c - 1, 1, 0);
    strokeWeight(w);
    line(x, y, px, py);
    px = x;
    py = y;
    x += cos(angle) * 8;
    y += sin(angle) * 8;
  }
}

//pleiades cluster created here, main centre piece
function pleiades() {
  noStroke();
  new Cluster(pleiadesStars);
  //   // Pleione
  //   let x = 600;
  //   let y = 450;
  //   stars.push(new Star(x, y, starSizes[0]));

  //   // Atlas
  //   let x2 = 595;
  //   let y2 = 400;
  //   stars.push(new Star(x2, y2, starSizes[1]));

  //   // Alcyone
  //   let x3 = 710;
  //   let y3 = 440;
  //   stars.push(new Star(x3, y3, starSizes[2]));

  //   // Merope
  //   let x4 = 800;
  //   let y4 = 480;
  //   stars.push(new Star(x4, y4, starSizes[3]));

  //   // Electra
  //   let x5 = 900;
  //   let y5 = 430;
  //   stars.push(new Star(x5, y5, starSizes[4]));

  //   // Celaeno
  //   let x6 = 900;
  //   let y6 = 350;
  //   stars.push(new Star(x6, y6, starSizes[5]));

  //   //Taygeta
  //   let x7 = 890;
  //   let y7 = 300;
  //   stars.push(new Star(x7, y7, starSizes[6]));

  //   // Asterope
  //   let x8 = 790;
  //   let y8 = 270;
  //   stars.push(new Star(x8, y8, starSizes[7]));

  //   // Maia
  //   let x9 = 760;
  //   let y9 = 340;
  //   stars.push(new Star(x9, y9, starSizes[8]));
}

function title(titleColor) {
  push();
  textSize(40);
  fill(titleColor);
  textAlign(CENTER, CENTER);
  text(`E T E R N A L   L O V E`, width / 2, height / 2);

  //Lines test
  noFill();
  for (let i = 0; i < 100; i++) {
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = color(60, 30, 100);

    stroke(60, 30, 100);

    noiseLine(random(-0.2, 1.1) * width, random(-0.2, 1.1) * height);

    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = color(0, 0, 0, 0);
  }
  pop();
}

function writeUp() {
  push();
  textSize(40);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`hey there, we've been trying to reach you`, width / 2, height / 2);
  pop();
}

function mouseClicked() {
  if (state === `title`) {
    state = `pleiades`;
  } else if (state === `pleiades`) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].checkClick();
    }
  }
}
