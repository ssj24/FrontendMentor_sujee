const container = document.getElementById('container');
const theme = document.getElementById('theme');

let curTheme = true;

const changeTheme = () => {
  container.classList.toggle('dark');
  curTheme = !curTheme;
  if (curTheme) {
    theme.childNodes[1].src = "./images/icon-moon.svg";
    theme.childNodes[1].alt = "light theme";
  } else {
    theme.childNodes[1].src = "./images/icon-sun.svg";
    theme.childNodes[1].alt = "dark theme";
  }
};

theme.addEventListener('click', changeTheme);
