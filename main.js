"use strict";

function updateTime() {
  const time = new Date();
  let hours = time.getHours();
  let meridiem;
  if (hours === 0) {
    hours = 12;
    meridiem = "AM";
  } else if (hours >= 12) {
    if (hours !== 12) hours -= 12;

    meridiem = "PM";
  } else meridiem = "AM";

  hours = hours.toString().padStart(2, 0);

  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);

  document.querySelector("h1").innerText =
    `${hours}:${minutes}:${seconds} ${meridiem}`;
}

updateTime();
setInterval(updateTime, 1000);
