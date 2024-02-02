// დავალება 1

const registration = document.getElementById("registration");
const fNameErr = document.getElementById("f-name-err");
const lNameErr = document.getElementById("l-name-err");
const emailErr = document.getElementById("email-err");
const passErr = document.getElementById("password-err");
const rPassErr = document.getElementById("r-password-err");
const descErr = document.getElementById("desc-err");

const greenBorder = "2px solid green";
const redBorder = "2px solid red";
const transBorder = "2px solid transparent";
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid.");
    $result.css("color", "green");
  } else {
    $result.text(email + " is invalid.");
    $result.css("color", "red");
  }
  return false;
};

registration.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.registration;
  //   console.log(formValues);
  try {
    if (formValues["first-name"].value.length < 6) {
      fNameErr.style.border = redBorder;
      formValues["first-name"].style.border = redBorder;
      throw new Error("first name should be at least 6 symbol");
    } else {
      fNameErr.style.border = transBorder;
      fNameErr.textContent = "";
      formValues["first-name"].style.border = greenBorder;
    }

    if (formValues["last-name"].value.length < 6) {
      lNameErr.style.border = redBorder;
      formValues["last-name"].style.border = redBorder;
      throw new Error("last name should be at least 6 symbol");
    } else {
      lNameErr.style.border = transBorder;
      lNameErr.textContent = "";
      formValues["last-name"].style.border = greenBorder;
    }

    if (validateEmail(formValues.email.value)) {
      formValues.email.style.border = greenBorder;
      emailErr.style.border = transBorder;
      emailErr.textContent = "";
    } else {
      formValues.email.style.border = redBorder;
      emailErr.style.border = redBorder;
      throw new Error("incorrect email");
    }
    if (formValues.password.value.length < 6) {
      passErr.style.border = redBorder;
      formValues.password.style.border = redBorder;
      throw new Error("password should be at least 6 symbol");
    } else {
      formValues.password.style.border = greenBorder;
      passErr.style.border = transBorder;
      passErr.textContent = "";
    }
    if (formValues["repeat-password"].value !== formValues.password.value) {
      formValues["repeat-password"].style.border = redBorder;
      throw new Error("password do not match");
    } else {
      formValues["repeat-password"].style.border = greenBorder;
      rPassErr.textContent = "";
    }
    if (formValues.description.value.length > 100) {
      formValues.description.style.border = redBorder;
      throw new Error("Text should be less than 100 symbols");
    } else {
      formValues.description.style.border = greenBorder;
      descErr.textContent = "";
    }
    const userData = {
      userName: formValues["first-name"].value,
      userSurName: formValues["last-name"].value,
      userEmail: formValues.email.value,
      userPassword: formValues.password.value,
      userPasswordMatch:
        formValues.password.value === formValues["repeat-password"].value,
      description: formValues.description.value,
    };
    registration.style.display = "none";
    const successText = document.createElement("h1");
    successText.textContent = "Registration Successful";
    successText.style.color = "white";
    successText.style.backgroundColor = "green";
    successText.style.textAlign = "center";
    document.body.prepend(successText);
  } catch (err) {
    if (err.message.includes(["first name"])) {
      fNameErr.textContent = err.message;
    } else if (err.message.includes("last name")) {
      lNameErr.textContent = err.message;
    } else if (err.message.includes("incorrect email")) {
      emailErr.textContent = err.message;
    } else if (err.message.includes("password should be")) {
      passErr.textContent = err.message;
    } else if (err.message.includes("password do not match")) {
      rPassErr.textContent = err.message;
    } else if (err.message.includes("less than 100")) {
      descErr.textContent = err.message;
    }
  }
});

// დავალება 2

const addButton = document.getElementById("add");
const textInut = document.getElementById("add-text");
const list = [];

const listUl = document.getElementById("list-ul");
addButton.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValues = document.forms;

  list.push(inputValues.add["add-text"].value);
  listUl.innerHTML = "";
  textInut.value = "";
  list.map((item) => (listUl.innerHTML += `<li>${item}</li>`));
});

// დავალება 3
const filtered = document.getElementById("filtered")
const pplsArray = [
  { name: "gela", surName: "gelashvili", proffesion: "frontend developer", age: 20 },
  { name: "nino", surName: "ninua", proffesion: "minor", age: 12 },
  { name: "girogi", surName: "giorgadze", proffesion: "designer", age: 19 },
  { name: "nato", surName: "natroshvili", proffesion: "backend developer", age: 30 },
  { name: "sulxan", surName: "sulxanishvili", proffesion: "fullstack developer", age: 50 },
];

const filteredPeople = pplsArray.filter(person => person.age > 18)

filteredPeople.map(person => {
  filtered.innerHTML += `<li>${person.name} is a ${person.proffesion}</li>`
})
