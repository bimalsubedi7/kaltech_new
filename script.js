var counter = 2;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);


let navItem = document.querySelectorAll('.nav-mbl-item')

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    for (let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("active")
    }
    this.classList.add("active")
  })
}