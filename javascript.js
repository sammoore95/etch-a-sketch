const container = document.querySelector(".container");
const squaresPerSide = 80;
const rows = squaresPerSide;
const columns = squaresPerSide;
const numOfBoxes = squaresPerSide * squaresPerSide;
const boxHeight = (1000 / rows) - .25;
const boxWidth = (1000 / columns) - .25;
const divs = {};



let i = 0;
while (i < numOfBoxes) {
    const newDiv = document.createElement('div');
    newDiv.classList.add("box-div");
    newDiv.id = `div${i}`;
    newDiv.style.cssText = `width: ${boxWidth}px; height: ${boxHeight}px; border: solid; border-width: 1px`;
    container.appendChild(newDiv);
    divs[`div${i}`] = newDiv;
    i++;
}

document.querySelectorAll('.box-div').forEach(box => {
    box.addEventListener("click", function (event) {
        console.log("Clicked box ID", event.target.id);
    });
});

document.querySelectorAll('.box-div').forEach(box => {
    box.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "blue";
    });
});

