function myFunction() {
  var x = document.getElementById("header-right");
  if (x.className === "right") {
    x.className += " responsive";
  } else {
    x.className = "right";
  }
}