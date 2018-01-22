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
    $('#main-camera').attr("filter", filter)
  });

  //click main, back to no-filter
  $('#main-camera').hover(
    function() {
      var filter = 'no-filter';
      $('#main-camera').removeClass().addClass(filter);
    }, function() {
      var filter = $('#main-camera').attr("filter");
      $('#main-camera').removeClass().addClass(filter);
    }
  );
});
