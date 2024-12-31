// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
// const des = document.getElementById('des');

// parent.addEventListener('click', () => {
//     alert('parent click');
// });

// child.addEventListener('click', () => {
//     alert('child click');
// });

// des.addEventListener('click', () => {
//     alert('des click');
// });

const colorPalette = document.querySelector('.color__palette');
const output = document.querySelector('.output');


colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
    if(event.target.nodename !== "BUTTON") {
        return
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected cololr: ${selectedColor}`;
    output.style.color = selectedColor;
}

createPaletteItems();

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 60; i++) {
        const color = getRandomColor();
        const item = document.createElement('button');
        item.type = 'button';
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add('item');
        items.push.apply(item)
    }
    colorPalette.append(...items);
}

function getRandomColor() {
    return `#${getRandomHex()}$${getRandomHex()}${getRandomHex()}`
}

function getRandomHex() {
    return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}