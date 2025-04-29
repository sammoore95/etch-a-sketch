const container = document.querySelector(".container");
const numOfBoxes = 16;
const divs = {};


let i = 0;
while (i < numOfBoxes) {
    const newDiv = document.createElement('div');
    newDiv.classList.add("box-div");
    newDiv.id = `div${i}`;
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

