
// A simple JavaScript program to implement Game of Life
 
// driver program
 
// Function to print next generation
function nextGeneration(grid, M, N){
     
    let future = new Array(M);
    for(let i = 0; i < M; i++){
        future[i] = new Array(N).fill(0);
    }
  
    // Loop through every cell
    for(let l=0;l<M;l++){
        for(let m=0;m<N;i++){
             
            // finding no Of Neighbours that are alive
            let aliveNeighbours = 0
            for(let i = -1; i < 2; i++)
            {
                for(let j = -1; j < 2; j++)
                {
                    if ((l + i >= 0 && l + i < M) && (m + j >= 0 && m + j < N))
                        aliveNeighbours += grid[l + i][m + j]
                }
            }
  
            // The cell needs to be subtracted from
            // its neighbours as it was counted before
            aliveNeighbours -= grid[l][m]
  
            // Implementing the Rules of Life
  
            // Cell is lonely and dies
            if ((grid[l][m] == 1) && (aliveNeighbours < 2))
                future[l][m] = 0
  
            // Cell dies due to over population
            else if ((grid[l][m] == 1) && (aliveNeighbours > 3))
                future[l][m] = 0
  
            // A new cell is born
            else if ((grid[l][m] == 0) && (aliveNeighbours == 3))
                future[l][m] = 1
  
            // Remains the same
            else
                future[l][m] = grid[l][m]
        }
    }
  
    document.write("Next Generation","</>")
    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if (future[i][j] == 0)
                document.write(".")
            else
                document.write("*")
        }
        document.write("</br>")
    }
  }
  
  let M = 10,N = 10
  
  // Initializing the grid.
  let grid = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ]
  
  // Displaying the grid
  document.write("Original Generation","</br>")
  for(let i = 0; i < M; i++)
  {
    for(let j = 0; j < N; j++)
    {
         
        if(grid[i][j] == 0)
            document.write(".")
        else
            document.write("*")
    }
    document.write("</br>")
  }
  document.write("</br>")
  nextGeneration(grid, M, N)