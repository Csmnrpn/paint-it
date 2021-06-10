const canvasContainer = document.querySelector('.canvasContainer');
const clearButton = document.querySelector('.clearButton');
const sizeButton = document.querySelector('.sizeButton');

let size = 10;

function createCanvas(size) {
    canvasContainer.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('canvasSquares');
        canvasContainer.appendChild(div);
    }
    
}

createCanvas(size);

let canvasSquares = document.querySelectorAll('.canvasSquares');

function canvasRed() {
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.classList.add('red');
        })});
}

canvasRed();

sizeButton.addEventListener('click', function() {
    size = Number(prompt("Please enter the size of the canvas. (max: 100px)"));

    canvasSquares.forEach(square => {
        square.remove();
    })
    createCanvas(size);

    canvasSquares = document.querySelectorAll('.canvasSquares');

    canvasRed();
})


clearButton.addEventListener('click', function(){
    canvasSquares.forEach(square => {
        square.classList.remove('red');
    })
});





