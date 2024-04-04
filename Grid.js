/ Create a 2D grid with dimensions numRows x numCols, filled with defaultValue
function createGrid(numRows, numCols, defaultValue) {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(new Array(numCols).fill(defaultValue));
  }
  return grid;
}

// Example: Create a 3x3 grid filled with zeros
const grid = createGrid(3, 3, 0);
console.log(grid); // Output: [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]

// Accessing and modifying values
grid[0][1] = 5;
console.log(grid[0][1]); // Output: 5

// Iterate through the grid
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(`Value at (${i}, ${j}): ${grid[i][j]}`);
  }
}