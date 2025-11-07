export const showNotification = (notificationMessage: string, status) => {
  const notificationElement = document.createElement("div");
  notificationElement.classList.add("notification", `notification-${status}`);
  notificationElement.innerText = notificationMessage;
  notificationElement.onclick = (e) => {
    notificationElement.remove();
  };

  document
    .getElementById("notificationsContainer")
    .appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.remove();
  }, 5000);
};
