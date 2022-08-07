let decimal = false;
let numberArray = [];
let canClearEverything = false;
let canClearNumber = false;

function addToNumber(digit) {

    canClearEverything = true;
    canClearNumber = true;

    // ENTER IF: Array is empty
    if (numberArray.length == 0) {
        // Make number into decimal 0.25 (for example) if digit = "."
        if (digit == ".") {
            numberArray.push(0);
            numberArray.push(digit);
            decimal = true;
        }
        // Push digit; whether 0 or 5
        else {
            numberArray.push(digit)
        }
    }

    // ENTER IF: Array is *NOT* empty
    else {
        if (digit == ".") {
            if (decimal != true) {
                numberArray.push(digit);
                decimal = true;
            }
        }
        else {
            // ENTER IF: Non-Zero Number -OR- DECIMAL
            if (numberArray[0] != 0 || decimal == true) {
                numberArray.push(digit);
            }
            // Override first element with digit
            else {
                numberArray[0] = digit;
            }
        }
    }

    document.querySelector("#number").innerHTML = formNumber(numberArray);
    document.querySelector("#equation").innerHTML = equationString;
}

let listOfOperators = ["+", "-", "*", "/"];
let equationArray = [];
let equationString = "";

function addToEquation(operator) {    
    // Number = 96, you're passing "+"
    if (numberArray.length != 0) {
        equationArray.push(formNumber(numberArray));
        equationArray.push(operator);
        numberArray = [];
    }
    else {
        // equation = [96, +] and you're passing a "/"
        if (equationArray.length != 0) {
            // remove last operator (+)
            equationArray.pop(equationArray[equationArray.length - 1]);

            // add new operator (/)
            equationArray.push(operator);

            // new equation = [96, /]
        }
    }

    equationString = equationArray.join(' ');

    if (equationArray.length != 0) {
        document.querySelector("#number").innerHTML = solveEquation(equationString);
    }

    document.querySelector("#equation").innerHTML = equationString;
    number = "";
}

let number = "";

function formNumber(numberArray) {
    let length = numberArray.length;
    number = "";

    for (let i = 0; i < length; i++) {
        number += numberArray[i];
    }
    
    return number;
}

function solveEquation(equation) {
    
    // ENTER IF "=" button was clicked
    if (equation == null) {
        if (number == "") {
            if (equationArray.length == 2) {
                displayTextForNumber = solution;
            }
            else {
                displayTextForNumber = eval(equationWithoutLastOperator);
            }

            displayTextForEquation = equationString.substring(0, equationString.length - 1) + ` = ${solution}`;
        }
        else {
            displayTextForNumber = eval(equationString + number);

            if (isNaN(displayTextForNumber) == true) {
                displayTextForNumber = "ERROR";
            }
            
            displayTextForEquation = equationString + ` ${number} = ${displayTextForNumber}`;
        }

        document.querySelector("#number").innerHTML = displayTextForNumber;
        document.querySelector("#equation").innerHTML = displayTextForEquation;

        canClearEverything = true;
        canClearNumber = false;

        numberArray = [];
        equationArray = [];
        equationString = "";
    }

    // Find solution during process
    else {
        equationString = equationArray.join(' ');

        // Remove the last operator, for evaluation
        equationWithoutLastOperator = equationString.substring(0, equationString.length - 1);
    
        // Evaluate the equation, up to the current point
        solution = eval(equationWithoutLastOperator);
        // If solution is float, chop to the hundredths place
        if (Number.isInteger(solution) == false) {
            solution = solution.toFixed(2);
        }
    
        return solution;
    }
}

let displayTextForEquation = "";

function clearEverything() {
    numberArray = [];
    equationArray = [];
    equationString = "";

    if (canClearEverything == true) {
        canClearEverything = false;
        displayTextForEquation = "CLEARED";
    }
    
    document.querySelector("#number").innerHTML = "0";
    document.querySelector("#equation").innerHTML = displayTextForEquation;

    displayTextForEquation = "";
    
}

function clearNumber() {
    if (canClearNumber == true) {
        numberArray = [];
        document.querySelector("#number").innerHTML = "0";
        
        if (equationArray.length == 0) {
            canClearEverything = false;
            canClearNumber = false;
        }

        document.querySelector("#equation").innerHTML = displayTextForEquation;
    }
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