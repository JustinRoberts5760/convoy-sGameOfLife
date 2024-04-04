// Size of the grid
const numRows = 5;
const numCols = 5;

// Create a 2D grid with dimensions numRows x numCols, filled with zeros
function createGrid(numRows, numCols) {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(new Array(numCols).fill(0));
  }
  return grid;
}

// Function to initialize the grid randomly with 0s and 1s
function randomizeGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }
}

// Function to print the grid to the console
function printGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i].join(' '));
  }
  console.log('\n');
}

// Function to calculate the next generation of the grid based on Game of Life rules
function nextGeneration(currentGrid) {
  const newGrid = createGrid(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const neighbors = countNeighbors(currentGrid, i, j);
      if (currentGrid[i][j] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          newGrid[i][j] = 0; // Any live cell with fewer than two live neighbors dies, as if by underpopulation. OR Any live cell with more than three live neighbors dies, as if by overpopulation.
        } else {
          newGrid[i][j] = 1; // Any live cell with two or three live neighbors lives on to the next generation.
        }
      } else {
        if (neighbors === 3) {
          newGrid[i][j] = 1; // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        }
      }
    }
  }

  return newGrid;
}

// Function to count the number of live neighbors for a cell
function countNeighbors(grid, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip the current cell
      const neighborX = x + i;
      const neighborY = y + j;
      if (neighborX >= 0 && neighborX < numRows && neighborY >= 0 && neighborY < numCols) {
        count += grid[neighborX][neighborY];
      }
    }
  }
  return count;
}

// Create the initial grid and randomize it
let grid = createGrid(numRows, numCols);
randomizeGrid(grid);

// Print the initial grid
console.log("Initial Grid:");
printGrid(grid);

// Calculate and print the next generations
const numGenerations = 5;
for (let i = 0; i < numGenerations; i++) {
  grid = nextGeneration(grid);
  console.log(`Generation ${i + 1}:`);
  printGrid(grid);
}