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

function funcao(){
  var x = $("body");
  for ( var i = 0; i < x.length; i++) {
  x[i].style.fontSize="1.5rem";
  }
  };

  function funcao2(){
    var x = $("body");
    for ( var i = 0; i < x.length; i++) {
    x[i].style.fontSize="";
    }
    };


