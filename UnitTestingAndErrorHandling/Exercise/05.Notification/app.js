function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  

  if (notificationDiv.getAttribute('data-notification-set') !== 'true') {
    notificationDiv.setAttribute('data-notification-set', 'true');
    notificationDiv.addEventListener('click', notificationDivClickHandler);
  }

  function notificationDivClickHandler(ev) {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.style.display = 'none';
  }
}