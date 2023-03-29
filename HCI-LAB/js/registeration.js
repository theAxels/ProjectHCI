document.getElementById("show-register").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    document.querySelector(".header").style.display="none"
    document.querySelector("#nav").style.display="none"
    document.querySelector(".center").style.display="none"
})

document.getElementById("closeButton").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active")
    document.querySelector(".header").style.display="flex"
    document.querySelector("#nav").style.display="flex"
    document.querySelector(".center").style.display="flex"
    document.querySelector(".successElement").style.display="none"
    document.querySelector(".formElement").style.display="block"
    document.querySelector(".form").classList.remove("on")
})

const inputName = document.getElementById("name")
const inputAge = document.getElementById("age")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const inputConfirm = document.getElementById("confirmPassword")
const inputCekBox = document.getElementById("term")
const register = document.getElementById("btnRegister")
const divError1 = document.getElementById("divError1")
const divError2 = document.getElementById("divError2")
const divError3 = document.getElementById("divError3")
const divError4 = document.getElementById("divError4")
const divError5 = document.getElementById("divError5")
const divError = document.getElementById("divError")

register.addEventListener("click", (event)=>{
    register.classList.toggle("active")
    // alert("Masuk validasi")
    event.preventDefault()

    var errorText1 = ""
    var errorText2 = ""
    var errorText3 = ""
    var errorText4 = ""
    var errorText5 = ""
    var errorText = ""

    const name = inputName.value
    if(name.length == 0){
        errorText1 = "Name not filled"
    }
    else if(!name.includes(' ')){
        errorText1 = "The name must consist of 2 words"
    }

    const age = inputAge.value
    if(age.length == 0){
        errorText2 = "Age not filled"
    }
    else if(age < 18){
        errorText2 = "Age must be over 17 years"
    }

    const email = inputEmail.value
    if(email.length == 0){
        errorText3 = "E-mail not filled"
    }
    else if(!email.includes("@")||!email.includes(".") || email.length <=10){
        errorText3 = "Email must contain '@', '.', and more than 10 characters"
    }

    const password = inputPassword.value
    if(password.length == 0){
        errorText4 = "Password is not filled"
    }
    else if(password.length < 8){
        errorText4 = "Password minimum 8 characters"
    }

    const confirm = inputConfirm.value
    if(password.length == 0){
        errorText5 = "Password is not filled"
    }
    else if(confirm.length == 0){
        errorText5 = "Confirmation password is not filled"
    }else if(confirm!=password && confirm.length>0){
        errorText5 = "Your confirmation password does not match the password"
    }
    
    const cek = inputCekBox.checked
    if(!cek){
        errorText = "Check the check box to continue"
    }
    
    if(errorText == "" && errorText1 == "" && errorText2 == "" && errorText3 == "" && errorText4 == "" && errorText5 == ""){
        document.querySelector(".formElement").style.display="none"
        document.querySelector(".successElement").style.display="flex"
        document.querySelector(".form").classList.add("on")
        // alert("Hello " + name +", successful register!")
        // document.querySelector(".popup").classList.remove("active")
        // document.querySelector(".header").style.display="flex"
        // document.querySelector("#nav").style.display="flex"
        // document.querySelector(".center").style.display="flex"
        inputName.value = ""
        inputAge.value = ""
        inputEmail.value = ""
        inputPassword.value = ""
        inputConfirm.value = ""
        inputCekBox.checked = ""
        register.classList.toggle("active")
    }

    setTimeout(() => {
        register.classList.toggle("active")
    }, 500);
    divError1.innerText = errorText1
    divError2.innerText = errorText2 
    divError3.innerText = errorText3   
    divError4.innerText = errorText4
    divError5.innerText = errorText5
    divError.innerText = errorText
    // register.classList.remove("active")
})