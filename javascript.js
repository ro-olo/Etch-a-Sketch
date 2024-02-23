const container = document.querySelector('.container'); 
let chosenColor = 'black';

document.addEventListener('DOMContentLoaded', function() {
    makeGrid(16);
});

function makeGrid(chosenSize) {

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    for ( i = 0; i < chosenSize; i++ ) {
        let col = document.createElement('div');
        container.appendChild(col);
        col.classList.add('columns');

        for ( j = 0; j < chosenSize; j++ ) {
        let row = document.createElement('div');
        col.appendChild(row);
        row.classList.add('rows');
        row.classList.add('items');

        let items = document.querySelectorAll('.items');
        items.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('hover');
            })
            item.addEventListener('mouseleave', () => {
                item.classList.remove('hover');
            })
            item.addEventListener('click', () => {
                removeColor(item);
                switch (chosenColor) {
                    case 'dGray':
                    item.classList.toggle('switchDgray');
                    break;
                    case 'lGray':
                    item.classList.toggle('switchLgray');
                    break;
                    case 'white':
                    item.classList.toggle('switchWhite');
                    break;
                    default:
                    item.classList.toggle('switch');
                }
        
                button.addEventListener('click', () => {
                    item.classList.remove('switch');
                    item.classList.remove('switchDgray');
                    item.classList.remove('switchLgray');
                    item.classList.remove('switchWhite');
                })
            })

            item.addEventListener("dblclick", () => {
                item.classList.remove('switch');
                item.classList.remove('switchDgray');
                item.classList.remove('switchLgray');
                item.classList.remove('switchWhite');
            });

        })
        }
    }
}

function removeColor(element) {
    element.classList.remove('switch');
    element.classList.remove('switchDgray');
    element.classList.remove('switchLgray');
    element.classList.remove('switchWhite');
}

let sizes = document.querySelectorAll('.sizeList');
sizes.forEach((size) => {
    size.addEventListener('click', () => {
            chosenSize = size.firstChild.getAttribute('data-size'); 
            makeGrid(chosenSize)
        }) 
})

makeGrid();

let button = document.querySelector('button');

button.addEventListener('mouseenter', () => {
    button.classList.add('changed');
})
button.addEventListener('mouseleave', () => {
    button.classList.remove('changed');
})

let colors = document.querySelectorAll('.list');
    colors.forEach((color) => {
        color.addEventListener ('click', () => {
            chosenColor = color.firstChild.getAttribute('data-color');
        })
    })

