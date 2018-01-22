function createSketch(idName, type) {

  var capture;

  // save this file as sketch.js
  // Sketch One
  var s = function( p ) { // p could be any variable name

    p.setup = function() {
      if (type == 1) {
        p.createCanvas(480, 360);
      } else {
        p.createCanvas(160, 120);
      }

      capture = p.createCapture(p.VIDEO);
      capture.size(160, 120);
      capture.hide();
    };

    p.draw = function() {
      p.background(255);
      if (type == 1) {
        p.image(capture, 0, 0, 480, 360);
      } else {
        p.image(capture, 0, 0, 160, 120);
      }
    };

  };
  var myp5 = new p5(s, idName);

}
