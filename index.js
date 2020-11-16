//  part 1 vanila javascript


/* 
var screen = document.querySelector("#result");
var clear = document.querySelector("#clean");
var del = document.querySelector("#delete");
var addition = document.querySelector("#plus");
var subtraction = document.querySelector("#sub");
var multiplication = document.querySelector("#multi");
var division = document.querySelector("#div");
var equal = document.querySelector("#equal");
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
var number1 = 0;
var number2 = 0;
var operator;
var ans = 0;
var flag = 0;

function number_adding(x, y) {
    num = (y * 10) + x;
    //console.log(num);
    if (flag == 1) {
        screen.value = "";
        flag = 0;
    }
    screen.value += x;
}
one.addEventListener("click", function() {
    number_adding(number_array[1], num);
});
two.addEventListener("click", function() {
    number_adding(number_array[2], num);
});
three.addEventListener("click", function() {
    number_adding(number_array[3], num);
});
four.addEventListener("click", function() {
    number_adding(number_array[4], num);
});
five.addEventListener("click", function() {
    number_adding(number_array[5], num);
});
six.addEventListener("click", function() {
    number_adding(number_array[6], num);
});
seven.addEventListener("click", function() {
    number_adding(number_array[7], num);
});
eight.addEventListener("click", function() {
    number_adding(number_array[8], num);
});
nine.addEventListener("click", function() {
    number_adding(number_array[9], num);
});
zero.addEventListener("click", function() {
    number_adding(number_array[0], num);
});

clear.addEventListener("click", function() {
    screen.value = "";
    num = 0;
    rem = 0;
});
del.addEventListener("click", function() {
    num = num / 10;
    num = Math.floor(num);
    screen.value = screen.value.slice(0, -1);
});
addition.addEventListener("click", function() {
    screen.value = num + "+";
    number1 = num;
    num = 0;
    rem = 0;
    operator = "+";
});
subtraction.addEventListener("click", function() {
    screen.value = num + "-";
    number1 = num;
    num = 0;
    rem = 0;
    operator = "-";
});
multiplication.addEventListener("click", function() {
    screen.value = num + "X";
    number1 = num;
    num = 0;
    rem = 0;
    operator = "X";
});
division.addEventListener("click", function() {
    screen.value = num + "/";
    number1 = num;
    num = 0;
    rem = 0;
    operator = "/";
});
equal.addEventListener("click", function() {
        number2 = num;
        if (operator == "+") {
            ans = number1 + number2;
        } else if (operator == "-") {
            ans = number1 - number2;
        } else if (operator == "X") {
            ans = number1 * number2;
        } else if (operator == "/") {
            ans = number1 / number2;
        }
        //output
        screen.value = ans;
        num = 0;
        rem = 0;
        ans = 0;
        number1 = 0;
        number2 = 0;
        flag = 1;
    })
    /*
    var screen = document.querySelector("#result");
    var totalButtons = document.querySelectorAll(".btn").length;
    for (var i = 0; i < totalButtons; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("click", function() {
            var buttonValue = this.innerHTML;
            //document.querySelector("h1").innerHTML = text + "jhdsjf";
            document.write(buttonValue);
            console.log(buttonValue);
            screen.value = buttonValue;
        })
    }*/






//  part 2 use eval() function






//for using calculation log for one run
let history = [];
let screen = document.querySelector("#result");
let flag = 0;
let eval_calculation;

function writescreen(x) {
    x = String(x);
    if (x != "AC" && x != "=" && x != "del") {

        if ((x == "+" || x == "-" || x == "X" || x == "/") && flag == 1) {
            screen.value = eval_calculation;
            screen.value += x;
            flag = 0;
        } else if (flag == 1) {
            screen.value = "";
            flag = 0;
            screen.value += x;
        } else {
            screen.value += x;
        }
    }
    if (x == "AC") {
        screen.value = "";
    }
    if (x == "del") {
        let temp_content = screen.value;
        console.log(temp_content);
        let after_delete = temp_content.slice(0, -1);
        screen.value = after_delete;
        console.log(after_delete);
    }
    if (x == "=") {
        flag = 1;
        try {

            let content = screen.value;
            content = content.replace("X", "*");
            console.log(content);
            let content_to_save_history = screen.value;
            eval_calculation = eval(content);
            history.push(screen.value += " = " + eval_calculation);
        } catch (err) {
            screen.value = "SYNTAX ERROR!";
            console.log(err);
        }
    }
}


let i = history.length;


function showhistory(x) {
    screen.value = "";
    if (x == "up") {
        i--;
    }
    if (x == 'down') {
        i++;
    }
    if (i > history.length) {
        i = 0;
    }
    if (i < 0) {
        i = history.length;
    }
    if (history[i] != undefined) {

        screen.value = history[i];
    }




}