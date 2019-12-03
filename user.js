const userform = document.querySelector(".js-userform");
const inputName = userform.querySelector("input");
const showName = document.querySelector(".js-name");

const NAMEKEY = "CURRENTNAME";
const SHOWING = "showing";

const paintingName = function(text) {
  userform.classList.remove(SHOWING);
  showName.classList.add(SHOWING);
  showName.textContent = `Hello my name is ${text}`;
};

const getSubmit = function(event) {
  event.preventDefault();
  const text = inputName.value;
  setName(text);
  paintingName(text);
};

const setName = function(text) {
  localStorage.setItem(NAMEKEY, text);
};

const handleSubmit = function() {
  userform.classList.add(SHOWING);
  userform.addEventListener("submit", getSubmit);
};

const isCheckLocal = function() {
  const name = localStorage.getItem(NAMEKEY);

  if (name === null) {
    handleSubmit();
  } else {
    paintingName(name);
  }
};

function init() {
  isCheckLocal();
}

init();
