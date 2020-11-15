let screen = document.querySelector("#screen");
//get all the numbers 
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
//all numbers are in a array
let number_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//for number calculation
let num = 0;
let rem = 0;

function number_adding(x, y) {
    num = (y * 10) + x;
    console.log(num);
}
one.addEventListener("click", function() { number_adding(number_array[1], num); });
two.addEventListener("click", function() { number_adding(number_array[2], num); });
three.addEventListener("click", function() { number_adding(number_array[3], num); });
four.addEventListener("click", function() { number_adding(number_array[4], num); });
five.addEventListener("click", function() { number_adding(number_array[5], num); });
six.addEventListener("click", function() { number_adding(number_array[6], num); });
seven.addEventListener("click", function() { number_adding(number_array[7], num); });
eight.addEventListener("click", function() { number_adding(number_array[8], num); });
nine.addEventListener("click", function() { number_adding(number_array[9], num); });
zero.addEventListener("click", function() { number_adding(number_array[0], num); });