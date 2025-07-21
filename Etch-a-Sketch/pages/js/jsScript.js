// turns boxes from unhovered to hovered
const boxes = document.querySelectorAll(".gridBox");
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.classList.add("hovered");
    })    
})

// button activates regrid
const regridButton = document.querySelector(".changeButton")
regridButton.addEventListener("click", () => {
    regrid(prompt("Enter a number(1 through 100):"));
}) 

// function that regrids box container
function regrid(size) {
    if (size > 100 || size < 1) {
        size = 4;
        alert("Number is invalid, setting default value");
    }
    const cont = document.querySelector(".container");
    // remove rows and boxes from container
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }

    // create new grid
    for (let i = 0; i < size; i++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("class", "gridRow");
        for (let i = 0; i < size; i++) {
            const divBox = document.createElement("div");
            divBox.setAttribute("class", "gridBox");
            divRow.appendChild(divBox);
        }
        cont.appendChild(divRow);
    }

    // enable hovered/unhovered
    const boxes = document.querySelectorAll(".gridBox");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("hovered");
        })    
    })
}
