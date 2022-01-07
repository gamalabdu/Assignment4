let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")

button1.addEventListener("click", function () {
    document.getElementById("button1Text").textContent = "I'm right!"
})

button2.addEventListener("click", function () {
    document.getElementById("button2Text").textContent = "No I'm right!"
})