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
function disableButton() {
    document.getElementById("completed-btn").disabled = true
}


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


