import jquery = require('jquery');
  
  /**
   * 
   * Jul 27
   * 
   * ''1.
   * Create an N x N grid of white cells.
   * Each one allows toggling to and from black via a click.
   * 
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
   * Use the GoL function to bring the to life.
   */



const N = 8;



function main() {

  // const numbers: number[][] = [] // two-dimensional array
  // const n = numbers[12];
  // console.log('n = ', n); // what is the value printed?
  
  const gridState: boolean[][] = [ ];


  function getState(x: number, y: number): boolean {
    const state: boolean = gridState[y][x] ;
    return state;
  }

  const app = jquery('#app');

  const table = jquery('<table></table>');
  
  const randomCellButton = jquery('<button>Check random cell</button>');
  const resultBox = jquery('<span></span>');

  app.append(randomCellButton);
  app.append(resultBox);

  randomCellButton.click(event=>{

    event.preventDefault();

    const x = Math.floor(Math.random() * N);
    const y = Math.floor(Math.random() * N);
    
    const isDead = getState(x, y);
    const stateDescr = isDead ? 'White' : 'Black'; // tertiary operator
     
    // let stateDescr: string;
    // if (state == true) {
    //   stateDescr = 'Black'
    // } else {
    //   stateDescr = 'White'
    // }
    
    resultBox.text(
      'coordinate = ' 
      + x.toString() 
      + ' : ' 
      + y.toString() 
      + '; '
      + 'state = '
      + stateDescr
      );
  })
  
  
  for (let row = 0; row < N; row++) {
    
    
    const topRow = jquery('<tr></tr>');
    table.append(topRow);

    gridState[row] = [];


    for (let col = 0; col < N; col++) {

      const cell = jquery('<td></td>');
      topRow.append(cell);
      
      // gridState[row] = []; // WRONG!
      gridState[row][col] = true;
      
      cell.click(function(e) {
        
        e.preventDefault();

        if (gridState[row][col]) {
          cell.toggleClass('black', true);
          cell.toggleClass('white', false);
          gridState[row][col] = false;
        } else {
          cell.toggleClass('black', false);
          cell.toggleClass('white', true);
          gridState[row][col] = true;
        }
      });
    }
  }

  console.log('gridState', gridState);

  app.append(table);
}
jquery(main);