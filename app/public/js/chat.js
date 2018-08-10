var socket = io();
var chatForm = document.forms.chatForm;

var chatUsername = document.querySelector('#chat-username');
var chatMessage  = document.querySelector('#chat-message');

socket.on('connect', function() {

  if(chatForm) {

    chatForm.addEventListener('submit', function(e) {

      // Don't allow the form to submit
      e.preventDefault();

      socket.emit('postMessage', {
        username: chatUsername.value,
        message : chatMessage.value
      });

      chatMessage.value = '';
      chatMessage.focus();

    });

    // Process message to the form
    socket.on('updateMessages', function(data) {
      console.log('GOT A MESSAGE!');
      showMessage(data);
    });

  }

});

// Global Access
function showMessage(data) {

  var chatDisplay = document.querySelector('.chat-display');
  var newMessage  = document.createElement('p');

  if(chatUsername.value == data.username) {
    newMessage.className = 'bg-success chat-text';
  }
  else {
    newMessage.className = 'bg-info text-warning chat-text';
  }
  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);

}
