let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let btnOn1 = false
let btnOn2 = false

button1.addEventListener("click", function () {
    document.getElementById("button1Text").textContent = "I'm right!"
    document.getElementById("button2Text").textContent = ""
    
})

button2.addEventListener("click", function () {
    document.getElementById("button2Text").textContent = "No I'm right!"
    document.getElementById("button1Text").textContent = ""
    
})

//PROBLEM 2
let hoverEl = document.querySelector(".hover");

hoverEl.addEventListener("mouseover" , function(){
   alert("Hey, I told you not to hover over me!")
})

//PROBLEM 3
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
