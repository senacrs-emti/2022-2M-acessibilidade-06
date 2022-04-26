var xTriggered = 0;
$('#menu').hide()
$("body").keydown(function( event ) {
  if ( event.which == 9 ) {
    xTriggered++;
  }
  if (xTriggered < 3 && xTriggered > 0){
    $("#menu").show();
  }
  else {
      $("#menu").hide();
  }
})



