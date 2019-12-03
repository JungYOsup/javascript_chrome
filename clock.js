const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

var getCurrentTime = function() {
  const date = new Date();

  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
    min < 10 ? `0${min}` : `${min}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

function init() {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}

init();
