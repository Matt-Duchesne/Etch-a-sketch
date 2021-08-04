const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnErase = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

function createDivs(col, rows) {
    for(let i = 0 ; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid #888'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16, 16);

function resize() {
    btnSize.textContent = "Grid Size"
    btnSize.addEventListener('click', () => {
        let user = prompt('Enter grid width/height (max 64)')
        if(user === null || user < 1) {
            reset()
            createDivs(16, 16)
            black()
            gray()
            rgb()
        } else {
            reset()
            createDivs(user, user)
            black()
            gray()
            rgb()  
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}

resize()

function gray(){
    const boxes = container.querySelectorAll('.box');
    btnGray.textContent = "Gray";
    btnGray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let randNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${randNum}, ${randNum}, ${randNum})`
        }))
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

gray();

function black(){
    const boxes = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}

black();

function rgb(){
    const boxes = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${r}, ${g}, ${b})`
        }))
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}

rgb();

function eraser(){
    const boxes = container.querySelectorAll('.box');
    btnErase.textContent = 'Eraser';
    btnErase.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
        }))
    })

    buttonsContainer.appendChild(btnErase).classList.add('btn')
}

eraser();

function reset(){
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove());
}

