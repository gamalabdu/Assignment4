


let submitBtn = document.querySelector(".submit-btn")
let inputE = document.querySelector(".email")
let inputPass = document.querySelector(".password")
let inputUser = document.querySelector(".username")
let login = document.querySelector(".correct-input")
let correct = login.innerText



submitBtn.addEventListener("click", function () {

    if(inputPass.value !== "12345678") {
        alert("Inccorrect Password")
    } else {
        login.innerText = "Login Sucessful! "
        setTimeout(function () {
            login.innerText = correct
            inputPass.value = " "
            inputE.value = " "
            inputUser.value = " "
        },2000) 
    }
    
})
