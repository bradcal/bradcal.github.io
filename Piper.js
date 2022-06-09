//set a variables
let counter = 0;
let drink = [' Happy lemon', ' TP Tea', ' YiFang', ' Seattle Best Tea', ' Daboba']

//write a function
function listItem() {
    if (counter < 5) {
        //print out item
        document.getElementById("counter").innerHTML += drink[counter] + ",";
        counter++;
    } else {
        document.getElementById("counter").innerHTML = "It is all!";
    }
    return;
}
