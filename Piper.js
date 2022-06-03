let counter = 0;
let drink = [' Happy lemon', ' TP Tea', ' YiFang', ' Seattle Best Tea', ' Daboba']

function countUp() {
    if (counter < 5) {
        document.getElementById("counter").innerHTML += drink[counter];
        counter++;
    } else {
        document.getElementById("counter").innerHTML = "It is all!";
    }
    return;
}
