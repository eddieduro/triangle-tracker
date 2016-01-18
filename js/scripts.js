var triangleTracker = function(side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)){
    $("#isoceles").show();
  } else if ((side1 === side2) && (side2 === side3)){
    $("#equilateral").show();
  } else if ((side1 !== side2) && (side2 !== side3)){
    $("#scalene").show();
  }

};

$(document).ready(function() {
  $('#triangle-tracker').submit(function(event){
    var side1 = $('input#side1').val();
    var side2 = $('input#side2').val();
    var side3 = $('input#side3').val();

    var results = triangleTracker(side1, side2, side3);

    event.preventDefault();
  });

});
