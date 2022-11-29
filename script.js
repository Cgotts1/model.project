let title = document.querySelector(".title")
let hidden = document.querySelector(".hide")
let exit = document.querySelector(".hide")


title.addEventListener("click", function(){
hidden.style.display = "block"
})

exit.addEventListener("click", function(){
    exit.style.display = "none"
})




let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')


openBtn.addEventListener("click", function(){
    modalContainer.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    modalContainer.style.display = "none"
})

window.addEventListener("click", function(){
    if (event.target === modalContainer){           //event.target is clicked, hides container as well
        modalContainer.style.display = "none"
    }
})