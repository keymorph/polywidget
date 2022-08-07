let pilot = {
    0: "Evan",
    1: "Dante",
    2: "Raciel",
    3: "Richard",
    4: "Tevin"
};

function choosePilot() {
    document.querySelector("#name").innerHTML = pilot[Math.floor(Math.random() * 5)];
};
