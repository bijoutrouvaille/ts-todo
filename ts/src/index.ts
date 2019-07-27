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
   * Create a button to set a random cell to white.
   * Create a button to set a random cell to black.
   * 
   */



const N = 4;

function main() {

  const app = jquery('#app');

  const table = jquery('<table></table>');
  
  
  
  for (let row = 0; row < N; row++) {
    
    const topRow = jquery('<tr></tr>');
    table.append(topRow);
    
    for (let col = 0; col < N; col++) {
      
      const cell = jquery('<td></td>');
      topRow.append(cell);
      
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

  

  app.append(table);
}
jquery(main);