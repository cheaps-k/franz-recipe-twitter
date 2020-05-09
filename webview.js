module.exports = (Franz) => {
  const getNotificationNum = function getNotificationNum(notification_kind) {
    let count = 0;
    const elem = document.querySelector(`a[href="/${notification_kind}"] div div div`);

    if (elem) {
      count = parseInt(elem.innerText, 10);
    }
    
    return count;
  }
  
  const getMessages = function getMessages() {
    let count = 0;
    count += getNotificationNum("messages");
    count += getNotificationNum("notifications");

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
