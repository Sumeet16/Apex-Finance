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
let emailSignUpToolTip = document.querySelector('.emailSignUpToolTip');


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

errorEmailSignUp.addEventListener('click', ()=> {
  emailSignUpToolTip.classList.toggle('emailSignUpToolTipShow');
})

// validating email and all the other input validations required
submitSignUp.addEventListener("click", () => {
  let email = document.getElementById("emailSignUp").value;
  let userNameSignUp = document.querySelector(".userNameSignUp").value;
  let passSignUp = document.querySelector(".passSignUp").value;
  // email validation 
  emailValidate(email);
  // password validation
  validatePassword(passSignUp);
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

let emailValidation = (email) => {
  const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return pattern.test(email);
}

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

}

let validatePassword = (password) => {
  let hasUpper = false,
    hasLower = false,
    hasNumber = false;
  if (password.length >= 8) {
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase()) {
        hasUpper = true;
      }
      if (password[i] === password[i].toLowerCase()) {
        hasLower = true;
      }
      if (!isNaN(password[i])) {
        hasNumber = true;
      }
    }
  } else {
    console.log("Make a password which is above 8 letters");
  }

  if (hasUpper === true && hasLower === true && hasNumber === true) {
    console.log("Password Approved");
  } else {
    console.log("Password Not Approved");
  }
};


