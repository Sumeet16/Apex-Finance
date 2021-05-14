const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");

// declaring all the error icons on sign-in input feilds
let errorUserNameSignIn = document.querySelector(".errorUserNameLogIn");
let errorPassLoginIn = document.querySelector(".errorPassLoginIn");
let submitLogIn = document.querySelector(".submitLogIn");

// declaring all the error icons on sign-up input feilds
let errorUserNameSignUp = document.querySelector(".errorUserNameSignUp");
let errorEmailSignUp = document.querySelector(".errorEmailSignUp");
let errorPassSignUp = document.querySelector(".errorPassSignUp");

// declaring th sign-up and sign-in submit buttons
let submitSignUp = document.getElementById("submitSignUp");
let submitSignIn = document.querySelector(".submitLogIn");

// setting the default error icons' state to display none
errorEmailSignUp.style.display = "none";
errorUserNameSignUp.style.display = "none";
errorPassSignUp.style.display = "none";

errorUserNameSignIn.style.display = "none";
errorPassLoginIn.style.display = "none";

// to toggle b/w sign-in and sign-up
sign_up_btn.addEventListener("click", () =>
  container.classList.add("sign-up-mode")
);

sign_in_btn.addEventListener("click", () =>
  container.classList.remove("sign-up-mode")
);

// validating email and all the other input validations required
submitSignUp.addEventListener("click", () => {
  let email = document.getElementById("emailSignUp").value;
  let userNameSignUp = document.querySelector(".userNameSignUp").value;
  let passSignUp = document.querySelector(".passSignUp").value;

  if (email === "") {
    errorEmailSignUp.style.display = "block";
  }
  if (emailValidation(email)) {
    errorEmailSignUp.style.display = "none";
    errorUserNameSignUp.style.display = "none";
    errorPassSignUp.style.display = "none";
    errorUserNameSignIn.style.display = "none";
    errorPassLoginIn.style.display = "none";
  } else {
    errorEmailSignUp.style.display = "block";
  }
  if (userNameSignUp === "") {
    errorUserNameSignUp.style.display = "block";
  }
  if (passSignUp === "") {
    errorPassSignUp.style.display = "block";
  }
});

submitSignIn.addEventListener("click", () => {
  let userNameSignIn = document.querySelector(".userNameSignIn").value;
  let passSignIn = document.querySelector(".passSignIn").value;

  if (userNameSignIn === "" || passSignIn === "") {
    errorUserNameSignIn.style.display = "block";
    errorPassLoginIn.style.display = "block";
  } else {
    errorUserNameSignIn.style.display = "none";
    errorPassLoginIn.style.display = "none";
  }
});

function emailValidation(email) {
  const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return pattern.test(email);
}
