import jquery = require('jquery');
  
  /**
   * 
   * Jul 27
   * 
   * ''1.
   * Create an N x N grid of white cells.
   * Each one allows toggling to and from black via a click.
   * 
   * Aug 17
   * ''2.
   * Create a function to get the state of each cell.
   *   create a button that generates a random coordinate
   *   show that coordinate on screen
   *   show the state of a cell at that coordinate
   * 
   * ''3.
   * Create a function to set the state of any cell.
   *   create a new button that generates a random coordinate
   *   show that coordinate on screen
   *   flip the state of a cell at that coordinate 
   *      (if black, make white; if white, make black)
   * 
   * ''4. Start implementing the GoL rules.
   *    Unit testing.
   *    Implement the GoL function
   *      - with help of unit testing
   * 
   * ''5. 
   * Use the GoL function to bring the grid to life.
   */



const N = 3;
const ALIVE = false;
const DEAD = true;


function main() {

  // this global variable will hold the information about our cell
  const gridState: boolean[][] = [ ];
  // this global vairable will hold the HTML element of the cell
  const gridCells: JQuery<HTMLElement>[][] = [ ];

  // this function lets us see the information about the state.
  // as we saw in our first "naive" attempt to toggle the state,
  // this function can give wrong results if our visual and data 
  // representations are de-synchronized.
  function getState(x: number, y: number): boolean {
    const state: boolean = gridState[y][x] ;
    return state;
  }

  const app = jquery('#app');

  const table = jquery('<table></table>');
  
  // this button should select a random cell and show its state
  const showRandomCellButton = jquery('<button>Check random cell</button>');
  // this button should select a random cell, flip its state and show the new one.
  const setRandomCellButton = jquery('<button>Set random cell</button>');

  const resultBox = jquery('<span></span>');

  app.append(showRandomCellButton);
  app.append(setRandomCellButton);
  app.append(resultBox);

  setRandomCellButton.click(event=>{
    
    event.preventDefault();

    const col = Math.floor(Math.random() * N);
    const row = Math.floor(Math.random() * N);

    // get the current state
    const state = getState(col, row);
    
    // make a constant to hold what the new state should be
    const nextState = state === DEAD ? ALIVE : DEAD;

    // describe in human-friendly text what the next state will be
    const stateDescr = nextState === DEAD ? 'Dead' : 'Alive'; // tertiary operator

    // set the data representation of the cell
    gridState[row][col] = nextState;
    // set the visual representation of the cell
    gridCells[row][col].toggleClass('alive', nextState === ALIVE);

    // summarize the results
    resultBox.text(
      'coordinate = ' 
      + col.toString() 
      + ' : ' 
      + row.toString() 
      + '; '
      + 'state = '
      + stateDescr
      );
  })

  showRandomCellButton.click(event=>{

    event.preventDefault();

    const col = Math.floor(Math.random() * N);
    const row = Math.floor(Math.random() * N);
    
    const state = getState(col, row);
    const stateDescr = state===DEAD ? 'Dead' : 'Alive'; // tertiary operator

    resultBox.text(
      'coordinate = ' 
      + col.toString() 
      + ' : ' 
      + row.toString() 
      + '; '
      + 'state = '
      + stateDescr
      );
  })
  
  
  for (let row = 0; row < N; row++) {
    
    
    const topRow = jquery('<tr></tr>');
    table.append(topRow);

    // initialize the data representation row
    gridState[row] = [];
    // initialize the HTML element storage row
    gridCells[row] = [];


    for (let col = 0; col < N; col++) {

      const cell = jquery('<td></td>');
      topRow.append(cell);
      
      // initialize the state as dead
      gridState[row][col] = DEAD;
      // save the HTML element so that we can manipulate it later. 
      gridCells[row][col] = cell;
      
      cell.click(function(e) {
        
        e.preventDefault();

        if (gridState[row][col] === DEAD) {
          cell.toggleClass('alive', true);
          gridState[row][col] = ALIVE;
        } else {
          cell.toggleClass('alive', false);
          gridState[row][col] = DEAD;
        }
      });
    }
  }

  app.append(table);
}
jquery(main);