const colors = [
    "red", "green", 'blue', 'black', 'aqua', 'pink', 'yellow', 'Orange', 'Violet', "Brown"
];

const button = document.getElementById("changeBgBtn").addEventListener('click', function(){ 
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor
})
// state of completed-btn
document.getElementById("completed-btn").addEventListener('click', function() {
    alert("Board updated successfuly")
});

document.getElementById("completed-btn2").addEventListener('click', function() {
    alert("Board updated successfuly")
})


document.getElementById("completed-btn3").addEventListener('click', function() {
    alert("Board updated successfuly")
})
document.getElementById("completed-btn4").addEventListener('click', function() {
    alert("Board updated successfuly")
})
document.getElementById("completed-btn5").addEventListener('click', function() {
    alert("Board updated successfuly")
})
document.getElementById("completed-btn6").addEventListener('click', function() {
    alert("Board updated successfuly")
})




document.addEventListener("DOMContentLoaded", function() {
    let buttons= 
    document.querySelectorAll(".extrx-class");

    buttons.forEach(button => {
        button.addEventListener('click', function(){ 
            this.disabled = true;
            this.classList.add("bg-gray-400", "cursor-not-allowed");
        })
    })
})

function redirectTopage() {
    window.location.href= "question.html"
}
