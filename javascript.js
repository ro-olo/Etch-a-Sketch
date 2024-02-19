const container = document.querySelector('.container'); 

function makeGrid(size) {
for ( i = 0; i < size; i++ ) {
    let col = document.createElement('div');
    container.appendChild(col);
    col.classList.add('columns');

    for ( j = 0; j < size; j++ ) {
        let row = document.createElement('div');
        //row.innerHTML = i + "," +j;
        col.appendChild(row);
        row.classList.add('rows');
          row.classList.add('items');
          col.classList.add('items');
    }
  }
}

makeGrid(16);

let items = document.querySelectorAll('.items');

items.forEach((items) => {
    items.addEventListener('mouseenter', () => {
        items.classList.add('hover');
    })
    items.addEventListener('mouseleave', () => {
        items.classList.remove('hover');
    })
    items.addEventListener('click', () => {
        items.classList.toggle('switch');
    })

})

let button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
    button.classList.add('changed');
})
button.addEventListener('mouseleave', () => {
    button.classList.remove('changed');
})