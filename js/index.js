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

// declaring the sign-up and sign-in submit buttons
let submitSignUp = document.getElementById("submitSignUp");
let submitSignIn = document.querySelector(".submitLogIn");

// declaring the tool tips (hints) for the error icons
let emailSignUpToolTip = document.querySelector(".emailSignUpToolTip");
let passwordToolTip = document.querySelector(".passSignUpToolTip");

// setting the default error icons' state to display none
errorEmailSignUp.style.display = "none";
errorUserNameSignUp.style.display = "none";
errorPassSignUp.style.display = "none";

errorUserNameSignIn.style.display = "none";
errorPassLoginIn.style.display = "none";

// passwordToolTip.style.display = 'none';

// to toggle b/w sign-in and sign-up
sign_up_btn.addEventListener("click", () =>
  container.classList.add("sign-up-mode")
);

sign_in_btn.addEventListener("click", () =>
  container.classList.remove("sign-up-mode")
);

// validating email and password
submitSignUp.addEventListener("click", () => {
  const email = document.getElementById("emailSignUp").value;
  let phoneSignUp = document.querySelector(".userNameSignUp").value;
  let passSignUp = document.querySelector(".passSignUp").value;
  // email validation
  emailValidate();
  // password validation
  validatePassword(passSignUp);
  // tool tip
  tootTipShow();
  // phone validation
  validatePhone(phoneSignUp);
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

// email validation's pattern
let emailValidation = (email) => {
  const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return pattern.test(email);
};

//functions for email and password validation's logic
let emailValidate = () => {
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
};

let validatePassword = (password) => {
  const patternUserName = /^([A-Z a-z _@0-9]{8,20})$/;
  if (patternUserName.test(password)) {
    errorPassSignUp.style.display = "none";
    passwordToolTip.style.display = "none";
  } else {
    errorPassSignUp.style.display = "block";
    passwordToolTip.style.display = "block";
  }
};

// phone Validation
let validatePhone = (phone) => {
  let phoneString = phone.toString();

  if (phoneString.length == 10) {
    console.log("Perfect");
  } else if (phoneString.length > 10) {
    console.log("too big");
  } else {
    console.log("too small");
  }
};

let tootTipShow = () => {
  if (errorEmailSignUp.style.display == "block") {
    emailSignUpToolTip.classList.add("emailSignUpToolTipShow");
  } else {
    emailSignUpToolTip.classList.remove("emailSignUpToolTipShow");
  }
};
