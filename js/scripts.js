
$(document).ready(function() {
  $(".form-control#troubles").submit(function(event) {
  var troublesInput = $("#troubles").val();
  event.preventDefault();
  });

  $("form#old").submit(function(event) {
  var howOldInput = $("input:radio[name=how-old]:checked").val();
  event.preventDefault();
  });

  $("form#old").submit(function(event) {
  var dateInput = paresInt($("#born").val());
  event.preventDefault();
  });

  $("form#old").submit(function(event) {
    var favoriteColorInput = $("#color").val();
    event.preventDefault();
  });


  $("form#blanks").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = paresInt($("input#phone").val());
    var emailInput = paresInt($("input#email").val());
    event.preventDefault();
  });

  $(".name").text(nameInput);
  $(".verb1").text(phoneInput);
  $(".place").text(emailInput);
  $(".nouns").text(troublesInput);
  $(".family").text(howOldInput);
  $(".name").text(favoriteColorInput);
  $(".name").text(dateInput);

  $("#receipt").show();

  
});
