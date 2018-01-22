$(document).ready(function () {
  // Take photo button
  $('#btn-text').click(function() {
    console.log("recording gif...");

    CAPTURING = true;
    captureTimer = MAIN_FRAME_RATE * DURATION;
    capturer.start();
  });

  //Click preview, change main to that filter
  $('.preview-camera').click(function() {
    var filter = $(this).data('filter');
    $('#main-camera').removeClass().addClass(filter);
  });

});
