//===================================================================================
// DOM Selection

const canvasContainer = document.querySelector('.canvasContainer');
const clearButton = document.querySelector('.clearButton');
const sizeButton = document.querySelector('.sizeButton');
const sizeSlider = document.querySelector('.sizeSlider');
const currentSize = document.querySelector('.currentSize');
const springColor = document.querySelector('.springColor');
const summerColor = document.querySelector('.summerColor');
const autumnColor = document.querySelector('.autumnColor');
const winterColor = document.querySelector('.winterColor');
const blackColor = document.querySelector('.blackColor');
const whiteColor = document.querySelector('.whiteColor');

//===================================================================================
// Variables

const springColorPalette = ['#ee808e', '#eeaad0', '#9ad0f9', '#7fe384', '#fff1a1'];
const summerColorPalette = ['#fff741', '#ffce00', '#ea9900', '#a3bd21', '#009991'];
const autumnColorPalette = ['#44281d', '#553122', '#625d48', '#3e251e', '#654629'];
const winterColorPalette = ['#4ed3ff', '#00b3ff', '#7a9bff', '#3dedff', '#13b6de'];

//===================================================================================
// Initial Game Board

currentSize.innerText = `${sizeSlider.value*sizeSlider.value} squares`;
let size = sizeSlider.value;
createCanvas(size);

//===================================================================================
// Helper Functions

function createCanvas(size) {
    canvasContainer.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('canvasSquares');
        canvasContainer.appendChild(div);
    }
}

function paintItBlack() {
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = 'black';
        })});
}

let canvasSquares = document.querySelectorAll('.canvasSquares');
paintItBlack();

function getRandomColor(color) {
    let randomColor = Math.floor(Math.random() * color.length);
    return color[randomColor];
}

//===================================================================================
// Game Logic

sizeSlider.addEventListener('click', function(){
    canvasSquares.forEach(square => {
        square.remove();
    })
    createCanvas(sizeSlider.value);
    currentSize.innerText = `${sizeSlider.value*sizeSlider.value} squares`;
    canvasSquares = document.querySelectorAll('.canvasSquares');
    paintItBlack();
    blackColor.classList.add('active');
    whiteColor.classList.remove('active');
    winterColor.classList.remove('active');
    autumnColor.classList.remove('active');
    summerColor.classList.remove('active');
    springColor.classList.remove('active');
})

clearButton.addEventListener('click', function(){
    canvasSquares.forEach(square => {
        square.style.backgroundColor = '#F0F0D1';
    })
});

springColor.addEventListener('click', function(){
    springColor.classList.add('active');
    whiteColor.classList.remove('active');
    winterColor.classList.remove('active');
    autumnColor.classList.remove('active');
    summerColor.classList.remove('active');
    blackColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = getRandomColor(springColorPalette);
        })});
});

summerColor.addEventListener('click', function(){
    summerColor.classList.add('active');
    whiteColor.classList.remove('active');
    winterColor.classList.remove('active');
    autumnColor.classList.remove('active');
    blackColor.classList.remove('active');
    springColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = getRandomColor(summerColorPalette);
        })});
});

autumnColor.addEventListener('click', function(){
    autumnColor.classList.add('active');
    whiteColor.classList.remove('active');
    winterColor.classList.remove('active');
    blackColor.classList.remove('active');
    summerColor.classList.remove('active');
    springColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = getRandomColor(autumnColorPalette);
        })});
});

winterColor.addEventListener('click', function(){
    winterColor.classList.add('active');
    whiteColor.classList.remove('active');
    blackColor.classList.remove('active');
    autumnColor.classList.remove('active');
    summerColor.classList.remove('active');
    springColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = getRandomColor(winterColorPalette);
        })});
});

blackColor.addEventListener('click', function(){
    blackColor.classList.add('active');
    whiteColor.classList.remove('active');
    winterColor.classList.remove('active');
    autumnColor.classList.remove('active');
    summerColor.classList.remove('active');
    springColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = 'black';}
        )
    })})
  
whiteColor.addEventListener('click', function(){
    whiteColor.classList.add('active');
    blackColor.classList.remove('active');
    winterColor.classList.remove('active');
    autumnColor.classList.remove('active');
    summerColor.classList.remove('active');
    springColor.classList.remove('active');
    canvasSquares.forEach(square => {
        square.addEventListener ('mouseover', function(){
            square.style.backgroundColor = '#f9e8d0';
    })});});    