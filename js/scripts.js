// js for dropdown
$(document).ready(function() {
  $("form#troubles").submit(function(event) {
    event.preventDefault();
    var troubles = parseInt($("input#troubles").val());
    $("")
  });
});

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});


// js for radio

var howOld = $("input:radio[name=how-old]:checked").val();

// js for calendar

var date = $("#born").val();

// js for color picker

var favoriteColor = $("#color").val();

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = parseInt($("input#phone").val());
    var emailInput = parseInt($("input#email").val());

    $(".name").text(nameInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);


    $("#receipt").show();

    event.preventDefault();
  });
});
