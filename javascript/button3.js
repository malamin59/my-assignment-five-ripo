document.addEventListener("DOMContentLoaded", function() {
    let buttons= 
    document.querySelectorAll(".extrx-class");

    buttons.forEach(button => {
        button.addEventListener('click', function(){ 
            this.disabled = true;
            this.classList.add("bg-gray-400", "cursor-not-allowed");

            this.classList.remove("bg-blue-500", "hover: bg-blue-600", "active: bg-blue-700")
        })
    })
})