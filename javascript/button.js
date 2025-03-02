const colors = [
    "red", "green", 'blue', 'black', 'aqua', 'pink', 'yellow', 'Orange', 'Violet', "Brown"
];

const button = document.getElementById("changeBgBtn").addEventListener('click', function(){ 
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor
})