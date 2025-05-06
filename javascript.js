const container = document.querySelector(".container");
const divs = {};

const createGridButton = document.querySelector("#create-grid-button");
createGridButton.addEventListener("click", () => {
    const squaresPerSide = parseInt(prompt("Enter # of squares per side (100 or less):"));

    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert("Please enter a valid positive number.");
        return;
    }

    const numOfBoxes = squaresPerSide * squaresPerSide;
    const boxHeight = (1000 / squaresPerSide) - 0.25;
    const boxWidth = (1000 / squaresPerSide) - 0.25;

    // Clear old boxes
    container.innerHTML = "";

    for (let i = 0; i < numOfBoxes; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("box-div");
        newDiv.id = `div${i}`;
        newDiv.style.cssText = `width: ${boxWidth}px; height: ${boxHeight}px; border: solid 1px`;
        container.appendChild(newDiv);
        divs[`div${i}`] = newDiv;
    }

    document.querySelectorAll('.box-div').forEach(box => {
        box.addEventListener("click", function (event) {
            console.log("Clicked box ID", event.target.id);
        });

        box.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = "blue";
        });
    });
});