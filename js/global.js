let divs = document.querySelectorAll(".divs");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    divs.forEach(div => {
    div.classList.add('blur')
    });
    divs[i].classList.contains('blur') ? divs[i].classList.remove('blur') : divs[i].classList.add('blur')
  });
});