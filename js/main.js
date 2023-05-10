let value = 10;
let str = "Tertius Jonker";
let age = 18;
let total = 0;
let arrayName = ["Mike", "James", "Tina", "Brian", "Jimmy", "Paul",];

let isTina = false;
let isBrian = false;
let isJim = false;

for(let i = 0; i < arrayName.length; i++){
    console.log(arrayName[i])
    if(arrayName[i] === "Tina"){
        isTina = true;
    }
    if(arrayName[i] === "Brian"){
        isBrian = true;
    }
    if(arrayName[i] === "Jim"){
        isJim = true;
    }
}

console.log("Is Tina on the list? Answer: " + isTina);
console.log("Is Brian on the list? Answer: " + isBrian);
console.log("Is Jim on the list? Answer: " + isJim);

let arrayNumber = [5, 3, 7, 9, 22, 54, 32, 67, 12];

for(let i = 0; i < arrayNumber.length; i++){
    total += arrayNumber[i];
}

for(let i = 0; i <= 10; i++){
    let user = "mike"; 
    total += i;
    console.log(user)
}

console.log(total)

for(let i = 0; i <= value; i++){
    console.log(i)
}

for(let i = value; i >= 1; i--){
    console.log(i)
}


if(age >= 18){
    console.log("Come on in")
} else {
    console.log("NOT allowed")
}

if(value > 5 && value < 15){
    console.log("The value falls between 5 and 15")
} else {
    console.log("Value does not fall between 5 and 15")
}


if(str.length >= 15){
    console.log("Name is too long")
} else {
    console.log("Short Name")
}

if(str === ""){
    console.log("String is empty")
} else {
    console.log("This String is NOT empty")
}

if(value % 2 === 0){
    console.log("This is an even number")
    // 6 / 2 = 3 
    // 7 / 2 = 3.5

    // 7 % 2 = 0.5

} else {
    console.log("This is an odd number")
}

if(value >= 0){
    console.log("This is a positive number!")

} else {
    console.log("This is a negative number")
}