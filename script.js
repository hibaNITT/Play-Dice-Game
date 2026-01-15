// Dropdown functionality
function toggleDropdown() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}

function selectOption(option) {
    document.getElementById("dropdownButton").textContent = option;
    document.getElementById("dropdownMenu").classList.remove("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var randomNumber1 = Math.round((Math.random()*6) + 1);

if(randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");  
}else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");  
}else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");  
}else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");  
}else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");  
}else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");  
}


var randomNumber2 = Math.round((Math.random()*6) + 1);

if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");  
}else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");  
}else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");  
}else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");  
}else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");  
}else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");  
}

if(randomNumber1 > randomNumber2){
    document.querySelector("#result").textContent = "Player 1 Wins!!!!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("#result").textContent = "Player 2 Wins!!!!";
}else{
    document.querySelector("#result").textContent = "Its a drawww!!!!";
}



