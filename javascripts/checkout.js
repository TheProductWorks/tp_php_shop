function checkout() {
  // Get the form data
  var formData = $('form').serializeArray();

  // Send a request with the form data
  $.ajax({
    url: "/api/pay",
    type: "POST",
    data: {
      firstname: formData[0].value,
      lastname: formData[1].value,
      cardNumber: formData[2].value,
      expiryMonth: formData[3].value,
      expiryYear: formData[4].value,
      cvv: formData[5].value
    }
  }).done(function (res) {
    // Create the new response item
    createResponse(res);
  }).fail(function (err) {
    console.log(err);
    });
}