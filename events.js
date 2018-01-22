$(document).ready(function () {
  // Take photo button
  $('#btn-text').click(function() {
    console.log("recording gif...");
    mainCanvas.saveGif();
    console.log("done recording...");
  });

  //Click preview, change main to that filter
  $('.preview-camera').click(function() {
    var filter = $(this).data('filter');
    $('#main-camera').removeClass().addClass(filter);
  });

  //click main, back to no-filter
  // $('#main-camera').click(function() {
  //   var filter = 'no-filter';
  //   $('#main-camera').addClass(filter);
  // });
});
