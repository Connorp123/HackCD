function createSketch(idName) {

  var capture;

  // save this file as sketch.js
  // Sketch One
  var s = function( p ) { // p could be any variable name

    p.setup = function() {
      p.createCanvas(320, 240);

      capture = p.createCapture(p.VIDEO);
      capture.size(160, 120);
      capture.hide();
    };

    p.draw = function() {
      p.background(255);
      p.image(capture, 0, 0, 320, 240);
    };

  };
  var myp5 = new p5(s, idName);

}