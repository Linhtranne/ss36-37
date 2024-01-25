function display1() {
    let input = document.getElementById("input");
    let display1 = document.querySelector(".display1");
    display1.textContent = "cach 1: " + input.value;
  }
  function display2() {
    let input = document.getElementById("input");
    let display2 = document.querySelector(".display2");
    display2.innerHTML = "cach 2: " + input.value;
  }