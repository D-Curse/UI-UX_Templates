function myFunction() {
  var x = document.getElementById("header-right");
  if (x.className === "right") {
    x.className += " responsive";
  } else {
    x.className = "right";
  }
}

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "curselvl99@gmail.com",
    Password : "txlf ehpr rbzx xroj",
    To : 'dhruvbhatada@gmail.com',
    From : document.getElementById("email").value,
    Subject : "ENQUIRY EMAIL",
    Body : "hi"
  }).then(
    message => alert("Succesfully")
  );
}