let number = "0";
let decimal = false;
let equation = "";
let solution = "";
let listOfOperators = ["+", "-", "*", "/"];
let newEquation = true;

console.log(number);

function formNumber(value) {
    newEquation = true;
    if (Number.isInteger(value) == true) {
        

        if (number == 0 && number.slice(-1) != ".") {
         
            number = value;
        }
        else {
            number += value + "";
        }
    }
    else if (value == "." && decimal == false) {
        console.log("DID NOT ENTER THE NUMBER THING-- WENT INTO THE DECIMAL ELSE IF");
        decimal = true;
        number += value;
        console.log("\nNumber:\t" + number);
    }
    document.querySelector("#value").innerHTML = number;
    document.querySelector("#equation").innerHTML = equation;

    console.log("formNumber() -> " + number);
}

function addToEquation(operator) {

    if (newEquation == true) {
        let replaced = false;
        let equationLastCharacter = equation.slice(-1);
        console.log("Slice: " + equationLastCharacter);

        if (equationLastCharacter != false || number != false) {

            if (listOfOperators.includes(equationLastCharacter)) {

                if (number != 0) {
                    equation += number + operator;
                    console.log(equation);
                    number = "0";
                    decimal = false;
                }

                console.log("Length-1 Character: " + equation[equation.length - 1]);
                equation = equation.replace(equation[equation.length - 1], operator);
                replaced = true;
                console.log("New Equation: " + equation);
                console.log("NUMBER: " + number);
                console.log(number == "");
            }
            else {
                equation += number + operator;
                console.log(equation);
                number = "0";
                decimal = false;
            }
        }


        document.querySelector("#equation").innerHTML = equation;
        if (replaced == true) {
            document.querySelector("#value").innerHTML = eval(equation.slice(equation[equation.length - 1], -1));
        }
    }
}

function removeFromEquation() {

    if (newEquation == true) {
        number = "0";
        document.querySelector("#value").innerHTML = number;
    }
}

function clearEverything() {


    newEquation = true;
    // NUMBER 1 on the list
    if ((document.querySelector("#equation").innerText === "CLEARED" || document.querySelector("#equation").innerText === "") && document.querySelector("#value").innerText === "0") {
        document.querySelector("#equation").innerHTML = "";
        document.querySelector("#value").innerHTML = number;

    } else {




        console.log(number)



        console.log("BEFORE CLEAR === " + number);
        equation = "";
        number = "0"
        document.querySelector("#equation").innerHTML = "CLEARED";
        document.querySelector("#value").innerHTML = number;

        console.log("AFTER CLEAR === " + number);

    }
}

function solveEquation() {

    newEquation = false;

    if (number == false) {
        if (equation == false) {
            console.log("HELLO");
            console.log("number: " + number);
            if (document.querySelector("#equation").innerHTML == "CLEARED") {
                document.querySelector("#equation").innerHTML = "";
            }
            return;
        }
        else {
            equation = equation.slice(equation[equation.length - 1], -1)
        }
    }
    else {
        equation += number;
    }

    solution = eval(equation);
    console.log(solution);
    equation += ` = ${solution}`;
    document.querySelector("#equation").innerHTML = equation;
    document.querySelector("#value").innerHTML = solution;

    equation = "";
    solution = "";
    number = "0";
    console.log("EQUATION: " + equation + "\nSOLUTION: " + solution + "\nNUMBER: " + number);
}

//------- ENTIRE FUNCTIONALITY OF CALCULATOR FINISHED -------//

//    --- all that is left, is user experience shit, and small finicky actions ---    //

//------- LIST OF (8 or more) THINGS TO FIX:
//... #1 ... If the user has cleared the entry, and clicks clear again, just show the 0, not the 0 and "CLEARED"
//      because they're not clearing anything, it's already been cleared.

//... #2 ... Fix floating decimal point stuff, so maybe just round the showcased value on top to the fourth decimal place,

//... #3 ... Fix funky spacing issue with equation being too long

//... #4 ... Fix funky spacing issue with value(number) being too long

//... #5 ... Don't allow user to "Delete" the solved equation
//      If the user has entered an equation, and hit "enter"/solve, the value will be showcased
//      as the Solution, with the Equation = Solution on the bottom
//      Right? Don't let the user delete that screen, there's nothing to delete
//      You can't delete a solved equation, it's finished.
//      so disable, or just make it do nothing
//              they only thing they should be able to do from that point, in terms of changing the screen values
//              is to click clear, or to click a number to start a new equation

//... #6 ... If the user finished an equation
//  and the solution is shown
//  and they THEN click an addition/operator button
//  do nothing, only change the value shown, when they click a number or the clear button

//... #7 ... Consider changing the styling / size of everything / color of certain buttons (grouping the operators, etc)

//... #8 ... Consider an Entry log on the right hand side of the entire calculator
//  such that the user can see all of their previously entered solved equations
//  add a cap to that, show the last 5 or so