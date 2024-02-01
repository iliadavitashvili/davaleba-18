

const registration = document.getElementById("registration");
const fNameErr = document.getElementById("f-name-err")
const lNameErr = document.getElementById("l-name-err")

registration.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.registration;
//   console.log(formValues);
  try {
    
    if(formValues["first-name"].value.length < 6){
        fNameErr.style.border = "1px solid red"
        fNameErr.style.opacity = 1  
        throw new Error(
          "first name should be at least 6 symbol"
        )
    }else{
        fNameErr.style.border = "1px solid transparent";
        fNameErr.textContent =""
    }
    if(formValues["last-name"].value.length <6){
        lNameErr.style.border = "1px solid red"
        throw new Error(
            "last name should be at least 6 symbol"
        )
    }else{
        lNameErr.style.border = "1px solid transparent"
        lNameErr.textContent =""
    }

    
  } catch (err) {
    // console.log(err)
    if(err.message.includes(["first name"])){
        fNameErr.textContent = err.message
    }else if(err.message.includes(["last name"])){
        lNameErr.textContent = err.message
    }
  }
});
