//Create a 2-D grid in an array
const readlineSync = require('readline-sync');
//error cannot find module readline error
//fixed
    let grid = [[0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]];

// Created grid containing arrays of integers
// Grid is always able to change in width and length

    grid.forEach(function combineRow(row) {
        console.log(row.join(" "))
        }
    );
/* Used forEach method to select each array seperately and have them on 
new lines and called them rows, then created a function using each row
that prints each row and removes the commas and array brackets */

//grid needs improving
//grid fixed


