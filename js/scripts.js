// js for dropdown
$(document).ready(function() {
  $("form#troubles").submit(function(event) {
    var troubles = parseInt($("input#troubles").val());
    event.preventDefault();
  });
});



// js for radio

var howOld = $("input:radio[name=how-old]:checked").val();

// js for calendar

var date = $("#born").val();

// js for color picker

var favoriteColor = $("#color").val();
