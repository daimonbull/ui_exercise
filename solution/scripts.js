  // Radio button toggle show'hide payment method div 
  $('input[type="radio"]').click(function () {
    if ($(this).attr('value') == 'debit-card') {
      $('.payment-bank').hide();
      $('.payment-debit').show();
    } else {
      $('.payment-bank').show();
      $('.payment-debit').hide();
    }
  });

  $("#makePayment").click(function(event) {

    // Fetch form to apply custom Bootstrap validation
    var form = $("#paymentForm")

    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      form.addClass('is-invalid');
    } else {
      form.addClass('is-valid');
    }
    
    form.addClass('was-validated');
    // Perform ajax submit here...
    
  });

