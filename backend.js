const container = document.querySelector(".container");



function createGrid (numRows){

    const CELLSIZE = 20;
    let totalWidth = CELLSIZE * numRows;

    container.style.width = totalWidth + 'px';



    for(let i = 0; i < (16*16); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
    
        container.appendChild(cell);
    }
}

createGrid(16, 16);


