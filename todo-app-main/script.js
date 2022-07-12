const container = document.getElementById('container');
const theme = document.getElementById('theme');
const addContainer = document.querySelector('.addContainer');
const lists = document.querySelectorAll('.listItem');
const delBtns = document.querySelectorAll('.delBtn');
let curTheme = true;

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

const toggleActive = function() {
  this.firstElementChild.classList.toggle('active');
}

theme.addEventListener('click', changeTheme);
addContainer.addEventListener('click', toggleActive);
for (let list of lists) {
  list.addEventListener('click', toggleActive)
}
for (let delBtn of delBtns) {
  delBtn.addEventListener('click', e => {
    e.stopPropagation();
  })
}