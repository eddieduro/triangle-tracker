var triangleTracker = function(side1, side2, side3) {
 if ((side1 === side2) && (side2 !== side3) || (side3 === side1) && (side2 !== side1)) {
    $("#isoceles").show();
    return true;
  } else if ((side1 === side2) && (side2 === side3) && (side3 === side1)){
    $("#equilateral").show();
    return true;
  } else if ((side1 !== side2) && (side2 !== side3)) {
    $("#scalene").show();
    return true;
  }  else if ((side1 <= side3) && (side2 <= side3) || (side3 <= side1) && (side2 <= side1) || (side1 <= side2) && (side3 <= side2)){
      $('p#error').append('<p>try again</p>');
      return true;
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
