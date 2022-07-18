const container = document.getElementById('container');
const theme = document.getElementById('theme');
const addContainer = document.querySelector('.addContainer');
const listContainer = document.querySelector('.listContainer');
const lists = document.getElementById('lists');
const leftItem = document.getElementById('leftItem');
const allCate = document.getElementById('allCate');
const activeCate = document.getElementById('activeCate');
const compCate = document.getElementById('compCate');
const clearComp = document.querySelector('.rightFoot');
const cates = [allCate, activeCate, compCate];

let curTheme = true;
let todos = [];
let todoId = 0;

const changeTheme = () => {
  document.body.classList.toggle('dark');
  curTheme = !curTheme;
  if (curTheme) {
    theme.childNodes[1].src = "./images/icon-moon.svg";
    theme.childNodes[1].alt = "light theme";
  } else {
    theme.childNodes[1].src = "./images/icon-sun.svg";
    theme.childNodes[1].alt = "dark theme";
  }
};

const dragStart = function(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

const dragOver = function(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

const drop = function(e) {
  const target = e.target.closest('.listItem');
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  const srcIdx = todos.findIndex(todo => todo.id == data);
  const targetIdx = todos.findIndex(todo => todo.id == target.id);
  todos.splice(targetIdx, 0, todos.splice(srcIdx, 1)[0]);
  allCate.click();
}

const addTodoList = (data) => {
  todos.push({id: todoId+data[0], state: 'active', content: data});
  addHtml({id: todoId+data[0], state: 'active', content: data});
}
const addHtml = (data) => {
  const listItem = document.createElement('div');
  listItem.className = 'listItem';
  listItem.id = data.id;
  listItem.setAttribute('draggable', true);
  const html = `
    <span class="leftList">
      <div class="checked ${data.state == 'complete' ? 'complete' : ''}">
        <div class="innerCheck"></div>
        <img src="./images/icon-check.svg" alt="" />
      </div>
      <p>${data.content}</p>
    </span>
  `
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delBtn';
  deleteBtn.textContent = 'X';
  listItem.innerHTML = html
  listItem.appendChild(deleteBtn);
  listItem.addEventListener('click', () => {
    listItem.firstElementChild.firstElementChild.classList.toggle('complete');
    let todoItem = todos.find(todo => todo.id == data.id);
    todoItem.state = todoItem.state == 'active' ? 'complete' : 'active';
  })
  listItem.addEventListener('dragstart', dragStart);
  deleteBtn.addEventListener('click', e => {
    e.stopPropagation();
    e.target.parentElement.remove();
    todos = todos.filter(todo => {
      if (todo.id != e.target.parentElement.id) return true
    });
    leftItem.textContent = todos.length;
  })
  lists.appendChild(listItem);
  leftItem.textContent = todos.length;
  todoId++;
}

const filterCategory = (category) => {
  lists.innerHTML = '';
  if (category == 'All') {
    for (let todo of todos) {
      addHtml(todo);
    }
  } else if (category == 'Active') {
    for (let todo of todos) {
      if (todo.state == 'complete') {
        continue
      }
      addHtml(todo);
    }
  } else {
    for (let todo of todos) {
      if (todo.state == 'complete') {
        addHtml(todo);
      }
    }
  }
}

theme.addEventListener('click', changeTheme);
addContainer.addEventListener('click', () => {
  addContainer.children[1].focus();
})
addContainer.addEventListener('keydown', (e) => {
  if(e.keyCode == 13) {
    addTodoList(e.target.value);
    e.target.value = '';
  }
})
for (let category of cates) {
  category.addEventListener('click', () => {filterCategory(category.value)});
}
clearComp.addEventListener('click', () => {
  todos = todos.filter(todo => {
    if (todo.state == 'active') return true
  });
  allCate.click();
})
listContainer.addEventListener('dragover', dragOver);
listContainer.addEventListener('drop', drop);
