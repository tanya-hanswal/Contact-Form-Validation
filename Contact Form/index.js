const nameError = document.getElementById("nameError");
const lastnameError = document.getElementById("lastnameError");
const emailError = document.getElementById("emailError");
const Queryerror = document.getElementById("Queryerror");
const Messageerror = document.getElementById("Messageerror");
const Checkerror = document.getElementById("Checkerror");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const alertMsg = document.getElementsByClassName("alert");

let name = document.getElementById("name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let checkbox = document.getElementById("mycheck");

form.addEventListener("submit", (e) => {
  //firstname
  if (name.value == "" || name.value == null) {
    e.preventDefault();
    nameError.innerHTML = "This field is required";
  } else {
    nameError.innerHTML = "";
  }
  //lastname
  if (last_name.value.length == 0) {
    e.preventDefault();
    lastnameError.innerHTML = "This field is required";
  } else {
    lastnameError.innerHTML = "";
  }
  //email
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    e.preventDefault();
    emailError.innerHTML = "Please enter a valid email address";
  } else {
    emailError.innerHTML = "";
  }
  //QueryType
  if (document.getElementById("small").checked) {
    Queryerror.style.display = "none";
  } else if (document.getElementById("large").checked) {
    Queryerror.style.display = "none";
  } else {
    Queryerror.style.display = "block";
  }
  //Message
  if (message.value.length == 0) {
    e.preventDefault();
    Messageerror.innerHTML = "This field is required";
  } else {
    Messageerror.innerHTML = "";
  }
  //checked
  if (checkbox.checked == true) {
    Checkerror.style.display = "none";
  } else {
    Checkerror.style.display = "block";
  }
  btn.addEventListener("click", (e) => {
    alert("Thanks for completing the form. We'll be in touch soon!");
  });
});
