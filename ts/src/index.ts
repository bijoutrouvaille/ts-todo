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
   *   create a button that generates random a coordinate
   *   show that coordinate on screen
   *   show the state of a cell at that coordinate
   * Create a button to set a random cell to white.
   * Create a button to set a random cell to black.
   * 
   */



const N = 5;



function main() {

  // const numbers: number[][] = [] // two-dimensional array
  // const n = numbers[12];
  // console.log('n = ', n); // what is the value printed?
  
  const gridState: boolean[][] = [ ];
  
  function nextGen(cells: unknown) {
    return cells
  }
  function getState(x: number, y: number): boolean {
    // let state:boolean = ??? ;
    // return state;
    return false;
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
    
    const state = getState(x, y);
    const stateDescr = state ? 'Black' : 'White'; // tertiary operator
     
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
    
      // col = 2
      const cell = jquery('<td></td>');
      topRow.append(cell);
      
      // gridState[row] = []; // WRONG!
      gridState[row][col] = true;
    
      let state: boolean = true;

      cell.click(function(e) {
        e.preventDefault();
        if (state) {
          cell.toggleClass('black', true);
          cell.toggleClass('white', false);
          state = false;
        } else {
          cell.toggleClass('black', false);
          cell.toggleClass('white', true);
          state = true;
        }
      });
    }
  }

  console.log('gridState', gridState);

  app.append(table);
}
jquery(main);