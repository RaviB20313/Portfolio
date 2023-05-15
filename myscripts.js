function sendWhatsAppMessage(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Construct the WhatsApp message
  var whatsappMessage = 'Hi, my name is ' + name + '.'+'my email is ' + email + '.'+' My message is: ' + message;


  // Construct the WhatsApp URL
  var whatsappURL = 'https://wa.me/' + 9304228691 + '?text=' + whatsappMessage;

  // Open WhatsApp in a new tab/window
  window.open(whatsappURL, '_blank');
}
// .focus