
const container = document.querySelector('.container');

const GRIDSIDE = 600;
let rows = 4;
let cols = 4;



container.style.width = `${GRIDSIDE}px`;


function createGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const gridBox = document.createElement("div");

        gridBox.style.width = `${(GRIDSIDE / cols) -2}px`;
        gridBox.style.height = `${(GRIDSIDE / cols) -2}px`;
        gridBox.classList.add('box');

        container.appendChild(gridBox);
    }
    updateBoxes();
}

function updateBoxes() {
    const boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function(e) {
            if (randomColorPressed) {
                const rand = Math.floor(Math.random() * colors.length);
                e.target.style.backgroundColor = colors[rand];
            }
            else {
                e.target.style.backgroundColor = 'black';
            }
        });
    }
}

createGrid(rows, cols);




//buttons
const clearBtn = document.querySelector('.clear');
const gridNumBtn = document.querySelector('.grid-size');
const randomColorBtn = document.querySelector('.random-color');
const colorBtn = document.querySelector('.color');

let randomColorPressed = false;

randomColorBtn.addEventListener('click', function() {
    randomColorPressed = true;
    console.log(randomColorPressed);

});

colorBtn.addEventListener('click', function() {
    randomColorPressed = false;
})


function removeCurrGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}



function gridDim() {
    let dimNum = window.prompt("Enter Number of dimensions for grid");

    if (dimNum === null) {
        console.log('null pressed')
        dimNum = 4;

    }

    rows = parseInt(dimNum);
    cols = parseInt(dimNum);



    removeCurrGrid();
    createGrid(rows, cols);




}

gridNumBtn.addEventListener('click', gridDim);


clearBtn.addEventListener('click', clear);

function clear() {

    console.log('clear btn pressed');
    const boxes = document.querySelectorAll('.box');
    for (let i = 1; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'white';
    }

}



const colors = ['yellow', 'red', 'purple', 'blue', 'yellow', 'orange', 'green'
, 'dodgerblue', 'gold'];


const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function(e) {

            if (randomColorPressed) {
                const rand = Math.floor(Math.random() * colors.length);
                e.target.style.backgroundColor = colors[rand];
            }
            else {
                e.target.style.backgroundColor = 'black';
            }
        });
    }
