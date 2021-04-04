'use strict'
{
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    // これで各配列を作って
    const column = [];
    for(let i = 0; i < 5;i++){
      column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    }
    // 上の配列からランダムで数をとってきて5個それを呼び出したところに返す
    return column;
  }

// 関数createColumnで作ったランダムな整数を空配列columnsに代入している
  function createColumns() {
    const columns = []
    for(let i = 0; i < 5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = "FREE";
    return columns;
  }
  
  

  // 上で作ったcolumnsは縦横が逆になっているからそれを直している
  function createBingo(columns){
    const bingo = [];
    for (let row = 0; row < 5; row++){
      bingo[row] = [];
      for (let col = 0; col < 5; col++){
        bingo[row][col] = columns[col][row];
      }
    }
    return bingo;
  }

  
  // 作った配列をhtmlに書き込んでいる
  function renderBingo(columns){
      for(let row = 0; row < 5; row++){
      const tr = document.createElement('tr');
      for(let col = 0;col < 5; col++){
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }


  const columns = createColumns();
  const bingo = createBingo(columns);
  renderBingo(bingo);
}