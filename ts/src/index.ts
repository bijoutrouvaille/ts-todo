import $ = require('jquery');
import { fail } from 'assert';

function main() {
  const app = $('#app');
  const table = $('<table></table>');
  const els:JQuery<HTMLElement>[][] = [ ];
  const cells: boolean[][] = []
  const edge = 5;
  let x = true;
  for (let i: number = 0; i < edge; i++) {
    let tr = $('<tr/>');
    for (let j: number = 0; j < edge; j++) {
      els[i] = els[i] || [];
      cells[i] = cells[i] || []
      const el = els[i][j] = $('<td>_</td>');
      el.on('click', ()=>setCell(i,j))
      tr.append(el)
      el.on('click', ()=>null)
    }
    table.append(tr);
  }
  app.append(table);

  function setCell(i: number, j: number) {
    cells[i][j] = x;
    els[i][j].text(x ? 'X' : 'O');
    els[i][j].off('click')
    x = !x
  }    
}
$(main)
