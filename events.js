$(document).ready(function () {
  // Take photo button
  $('#btn-text').click(function() {
    console.log("recording gif...");
    mainCanvas.saveGif();
    console.log("done recording...");
  });
});