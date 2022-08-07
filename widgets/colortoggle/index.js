// 0 = green
// 1 = blue
// 2 = yellow
let colors = {
    0: "#C8F3C9",
    1: "#AEE5FF",
    2: "#F5E219"
}

function toggleColor(userSelection) {
    document.querySelector(".relative").style.backgroundColor = colors[userSelection];

    switch (userSelection) {
        case 0: {
            document.querySelector(`.color-toggle-button-0`).style.border = "1px solid blue";
            document.querySelector(`.color-toggle-button-1`).style.border = "10px";
            document.querySelector(`.color-toggle-button-2`).style.border = "10px";
            break;
        }
        case 1: {
            document.querySelector(`.color-toggle-button-0`).style.border = "10px";
            document.querySelector(`.color-toggle-button-1`).style.border = "1px solid blue";
            document.querySelector(`.color-toggle-button-2`).style.border = "10px";
            break;
        }
        case 2: {
            document.querySelector(`.color-toggle-button-0`).style.border = "10px";
            document.querySelector(`.color-toggle-button-1`).style.border = "10px";
            document.querySelector(`.color-toggle-button-2`).style.border = "1px solid blue";
            break;
        }
        default: {
            break;
        }
    }

}