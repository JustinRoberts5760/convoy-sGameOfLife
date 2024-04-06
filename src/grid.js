// Size of the grid
const numRows = 5;
const numCols = 5;

// Create a 2D grid with dimensions numRows x numCols, filled with zeros
const createGrid = (numRows, numCols) =>
  Array.from({ length: numRows }, () => Array(numCols).fill(0));

// Function to initialize the grid randomly with 0s and 1s
const randomizeGrid = (grid) =>
  grid.forEach((row) =>
    row.forEach((_, index, arr) => (arr[index] = Math.round(Math.random())))
  );

// Function to print the grid to the console
const printGrid = (grid) => grid.forEach((row) => console.log(row.join(" ")));

// Function to calculate the next generation of the grid based on Game of Life rules
const nextGeneration = (currentGrid) => {
  const newGrid = createGrid(numRows, numCols);

  currentGrid.forEach((row, i) =>
    row.forEach((_, j) => {
      const neighbors = countNeighbors(currentGrid, i, j);
      if (currentGrid[i][j] === 1) {
        newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        newGrid[i][j] = neighbors === 3 ? 1 : 0;
      }
    })
  );

  return newGrid;
};

// Function to count the number of live neighbors for a cell
const countNeighbors = (grid, x, y) =>
  [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].reduce(
    (count, [dx, dy]) =>
      count +
      (grid[x + dx]?.[y + dy] === 1 ? 1 : 0),
    0
  );

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
};