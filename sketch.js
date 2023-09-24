
  let distance = 80; //set the distance between dots as "distance"
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); 

  randomSeed(100); //set random seed
  strokeWeight(0);
  fill(255, 0, 0);
  

  
  for (let x = 0; x < width; x += distance) { //draw the grids of circles
    for (let y = 0; y < height; y += distance) {
      let shift = random(-20, 20); //set the distance that the circles are going to shift away from the grids as a random number between -20 and 20
      let diameters = [10, 30, 60]; //set the diameters of dots as 10 or 30 or 60
      let diameter = random(diameters); // Randomly choose a diameter from the ones set above
      ellipse(x + shift, y + shift, diameter); // Draw circles finally
    }
  }
}