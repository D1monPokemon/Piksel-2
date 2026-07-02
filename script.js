let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)
}

var CURRENT_COLOR = "rgb(255, 0, 0)";
var DEFAULT_COLOR = "rgb(62, 62, 62)";

var COLOR_MAP = {
    "red": "rgb(255, 0, 0)",
    "green": "rgb(0, 255, 0)",
    "blue": "rgb(0, 0, 255)",
    "yellow": "rgb(255, 255, 0)",
    "orange": "rgb(255, 165, 0)",
    "lightblue": "rgb(144,213,255)",
    "white": "rgb(255, 255, 255)",
    "gray": "rgb(62, 62, 62)"
}

let cells = document.querySelectorAll('.cell')
for(let i = 0; i < cells.length; i ++) {
    let cell = cells[i];
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = CURRENT_COLOR;
    })
    cell.addEventListener("mouseover", function(){
    if (IS_CLICKED) {
        cell.style.backgroundColor = CURRENT_COLOR;
    }
})

    cell.addEventListener("mousedown", function(){
        if (FILL_MODE) {
            for (let i = 0; i < cells.length; i ++) {
                cells[i].style.backgroundColor = CURRENT_COLOR;
            }
        } else {
            cell.style.backgroundColor = CURRENT_COLOR;
        }

})
}

let color_cells = document.querySelectorAll('.color-cell')
for(let i = 0; i < color_cells.length; i ++) {
    let color_cell = color_cells[i];
    color_cell.addEventListener('click', function() {
        let colorClass = "";
        if (color_cell.classList.contains("red")) colorClass = "red";
        else if (color_cell.classList.contains("green")) colorClass = "green";
        else if (color_cell.classList.contains("blue")) colorClass = "blue";
        else if (color_cell.classList.contains("yellow")) colorClass = "yellow";
        else if (color_cell.classList.contains("orange")) colorClass = "orange";
        else if (color_cell.classList.contains("lightblue")) colorClass = "lightblue";
        else if (color_cell.classList.contains("white")) colorClass = "white";
        else if (color_cell.classList.contains("gray")) colorClass = "gray";

        CURRENT_COLOR = COLOR_MAP[colorClass];

        FILL_MODE = false;

        document.querySelector('.selected').classList.remove('.selected')
        color_cell.classList.add('.selected')
    })
}

var IS_CLICKED = false

document.addEventListener("mousedown", function(){
    IS_CLICKED = true;
});

document.addEventListener("mouseup", function(){
    IS_CLICKED = false;
});

var FILL_MODE = false;

document.querySelector(".fill-tool").addEventListener("click", function(){
    FILL_MODE = true;
    
    document.querySelector('.selected').classList.remove('.selected')
    color_cell.classList.add('.selected')
})
