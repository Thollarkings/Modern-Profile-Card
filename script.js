function updateTime() {
  const timeElement = document.getElementById('time');
  timeElement.textContent = "Current Time: " + Date.now();
}

updateTime();
setInterval(updateTime, 1000);
