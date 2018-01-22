//type of 1 is main, type of 2 is preview
function setup() {

  // Create main canvas
  createSketch('main-canvas', 1);

  // Create preview canvases
  for(i in FILTERS) {
    console.log(FILTERS[i].name + ", " + FILTERS[i].class);
  }

}

function draw() {

}
