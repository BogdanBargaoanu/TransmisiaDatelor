document.getElementById("message").innerHTML = "Mesaj";
console.log("Mesaj2");
console.log("5" == 5)
console.log("5" === 5)

const user = {
    "id": 3,
    "name": "Andrei",
    "age": 25,
    "address": {
        "city": "Bucuresti",
        "street": "Calea Victoriei",
        "activitati": ["fotbal", "tenis"]
    }
}
var pass = "12";
console.log(user.address.city);
console.log(user.address.activitati[1]);
console.log(user.age);
showMessage("Test");
console.log(ShowMessage("Test2"));

console.log(pass=="123"? "GOOD" : "BAD");


function showMessage(message) {
    console.log("Mesaj din functie " + message);
}

function ShowMessage(message, ) {
    return message;
}