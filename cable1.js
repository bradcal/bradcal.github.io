function revealAboutMe() {
    document.getElementById("AboutMe").innerHTML = "Click the button again to see the pop-up about me another time!";
    alert("I am a student at UWB studying Interactive Media Design. This web design class is the only class I am taking this quarter, but I am also working and volunteering throughout my week!");

}


let counter = 0;
function countUp() {
    if (counter < 10) {
        counter++;
        document.getElementById("counter").innerHTML += counter;
        console.log(counter);
    } else {
        document.getElementById("counter").innerHTML = "you win!";
    }
    return;
}

let food = ['cheese ', 'bacon ', 'chicken strips ', 'hamburgers ', 'pasta ', 'broccoli ', 'brussel sprouts ', 'sandwiches ', 'corn ', 'pizza ', 'eggs ']
function pickFood() {
    var item = food[Math.floor(Math.random()*food.length)];
    while (item != 'cheese ') {
        var item = food[Math.floor(Math.random()*food.length)];
        document.getElementById("picker").innerHTML += item;
    }
}