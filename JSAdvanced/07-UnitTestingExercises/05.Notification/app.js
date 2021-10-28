function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', notificationDivHandler);
  
  function notificationDivHandler(e) {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.style.display = 'none';
  }
}