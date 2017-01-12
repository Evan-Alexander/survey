// js for dropdown





// js for radio



// js for calendar



// js for color picker



// JavaScript to capture form information when form is submitted:

$(document).ready(function() {
  $("form#some-form").submit(function(event) {
  var troublesInput = $("#troubles").val();
  var howOldInput = $("input:radio[name=how-old]:checked").val();
  var dateInput = $("#born").val();
  var favoriteColorInput = $("#color").val();
  var nameInput = $("input#name").val();
  var phoneInput = paresInt($("input#phone").val());
  var emailInput = paresInt($("input#email").val());
  event.preventDefault();
  });
});
