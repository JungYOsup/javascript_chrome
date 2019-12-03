const toDoform = document.querySelector(".js-toDoform");
const toDoinput = toDoform.querySelector("input");
const toDoul = document.querySelector(".js-toDoul");

const TODOLIST = "toDos";
let textarray = [];

const deleteToDo = event => {
  const delbtn = event.target;
  const li = delbtn.parentNode;

  toDoul.removeChild(li);

  const cleanToDos = textarray.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });

  textarray = cleanToDos;

  saveTodo();
};

const paintingTodo = text => {
  const todoli = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = textarray.length;

  delBtn.addEventListener("click", deleteToDo);

  delBtn.innerText = "X";
  todoli.innerText = text;
  todoli.appendChild(delBtn);
  toDoul.appendChild(todoli);
  todoli.id = newId + 1;

  const toDoObj = {
    text: text,
    id: newId + 1
  };
  textarray.push(toDoObj);
  saveTodo();
};

const saveTodo = () => {
  localStorage.setItem(TODOLIST, JSON.stringify(textarray));
};

const getTodoSubmit = event => {
  event.preventDefault();
  const toDoValue = toDoinput.value;
  saveTodo(toDoValue);
  paintingTodo(toDoValue);
};

const handleTodoSubmit = () => {
  toDoform.addEventListener("submit", getTodoSubmit);
};

const loadTodo = () => {
  const getTodo = localStorage.getItem(TODOLIST);

  if (getTodo !== null) {
    const paresedToDos = JSON.parse(getTodo);
    paresedToDos.forEach(function(toDo) {
      paintingTodo(toDo.text);
    });
  } else {
    handleTodoSubmit();
  }
  //첫째 delt삭제시킴
  //둘째 기존에 있으면 그대로 유지
  //셋째 index값 여러개
};

function init() {
  loadTodo();
}

init();
