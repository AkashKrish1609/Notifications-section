const active = document.querySelectorAll(".active")
const button = document.querySelector("button")
button.addEventListener("click", function(){
    active.forEach(function(act){
        act.classList.remove("active")
    })
})