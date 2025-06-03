const container = document.querySelector(".container");

function createGrid(numRows) {
  const TOTAL_WIDTH = 500;
  let cellSize = TOTAL_WIDTH / numRows;

  for (let i = 0; i < numRows * numRows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.style.width = cellSize + "px";

    container.appendChild(cell);

    cell.addEventListener("pointerenter", function (e) {
      e.target.style.backgroundColor = "gray";
    });
  }
}

createGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  let numRows = promptInput();

  deleteGrid();
  createGrid(numRows);
});

function deleteGrid() {
  container.innerHTML = "";
}

function promptInput() {
  let input = prompt("Please enter number of squares per side (1–100):");
  let numRows = Number(input);

  if (isNaN(numRows)) {
    alert("Please enter a valid number.");
    return promptInput(); // retry
  } else if (numRows <= 0) {
    alert("Error: Enter a number greater than 0.");
    return promptInput(); // retry
  } else if (numRows > 100) {
    alert("Error: Enter a number less than or equal to 100.");
    return promptInput(); // retry
  } else {
    return numRows;
  }
}
