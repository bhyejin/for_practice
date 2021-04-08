function setup() {
  createCanvas(1000, 1000);
  stroke(1);
}

function draw() {
  background(255);
  for (let b1 = mouseX; b1 <= 500; b1 += 80) {
    for (let b2 = mouseY; b2 <= 500; b2 += 80) {
      ellipse(mouseX, mouseY, b1, b2);
      fill(b1, b2, b2, 30);
    }
  }
}

// function setup() {
//   createCanvas(200, 200);
//   stroke(10);
// }

// function draw() {
//   background(255);
//   for (let b1 = 20; b1 <= 200; b1 += 30) {
//     for (let b2 = 20; b2 <= 200; b2 += 30) {
//       ellipse(100, 100, b1, b2);
//       fill(100, 10);
//     }
//   }
// }
