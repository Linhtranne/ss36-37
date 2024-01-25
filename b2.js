
let i = 0;
let arr = ["on", "off"];

function change_text() {
  let change = document.getElementById("text");
  i = (i + 1) % arr.length;
  change.textContent = arr[i];
}