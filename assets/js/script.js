const canvasContainer = document.querySelector('.canvasContainer');
const clearButton = document.querySelector('.clearButton');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('canvasSquares');
    canvasContainer.appendChild(div);
}

const canvasSquares = document.querySelectorAll('.canvasSquares');
canvasSquares.forEach(square => {
    square.addEventListener ('mouseover', function(){
        square.classList.toggle('red');
})});

clearButton.addEventListener('click', function(){
    canvasSquares.forEach(square => {
        square.classList.remove('red');
    })
})