const colorbtn = document.getElementById("colorbtn");
const generator = document.getElementById("generator");
const gencolor = document.getElementById("gencolor");
colorbtn.addEventListener("click", function () {
  const generatorcolor = Math.round(Math.random() * 16777215).toString(16); //9000+1000
  const display = document.getElementById("display");
  display.textContent = `#${generatorcolor}`;
  document.body.style.backgroundColor = `#${generatorcolor}`;
  gencolor.style.backgroundColor = `#${generatorcolor}`;
});
