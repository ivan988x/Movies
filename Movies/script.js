let btn = document.querySelectorAll(".button");
let description = document.querySelector(".de-content");
let price = document.querySelectorAll(".price p").innerText;
let reset = document.querySelector(".resetBtn");

let totalCounter = 0;

function watchMovie(element) {
  let el = element.closest(".de-content");
  el.style.backgroundColor = "gray";
  element.setAttribute("disabled", "true");

  let price = el.querySelector(".price p").innerHTML;
  price = parseInt(price.substring(0, 2));

  let total = price++;
  totalCounter += total;
  document.querySelector(
    ".gradient-border"
  ).innerText = `Total Cost: ${totalCounter} $`;
}

function resetAll() {
  location.reload();
}
