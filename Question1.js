let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let btnOn1 = false
let btnOn2 = false

button1.addEventListener("click", function () {
    btnOn1 = !btnOn1
    if (btnOn1){
        document.getElementById("button1Text").textContent = "I'm right!"
    } else {
        document.getElementById("button1Text").textContent = ""
    }
    
})

button2.addEventListener("click", function () {
    btnOn2 = !btnOn2
    if(btnOn2){
        document.getElementById("button2Text").textContent = "No I'm right!"
    } else {
        document.getElementById("button2Text").textContent = ""
    }
    
})