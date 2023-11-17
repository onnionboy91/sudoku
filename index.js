console.log('Привет');

const { log } = require('console');
const fs = require('fs')

function read(nameFile) {
  const file = fs.readFileSync(`${__dirname}/${nameFile}`, 'utf-8');
  const allFieldsStr = file.trim().split('\n')
//   console.table(allFieldsStr);
  const allRows = [];
  for (let el of allFieldsStr) {
    for (let i = 0; i < el.length; i += 9) {
      allRows.push(el.slice(i, i+9))
    }
  }
//   console.log(allRows);

  const allFields = [];
  for (let i = 0; i < allRows.length; i += 9) {
    allFields.push(allRows.slice(i, i+9))
  }

//   console.log(allFields);

  for (let i = 0; i < allFields.length; i++) {
    for (let j = 0; j < allFields[i].length; j++) {
      allFields[i][j] = allFields[i][j].split('')
    }
  }
  console.table(allFields);
  return allFields
}



function solve(arr, numFild) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  const Field = arr[numFild];
  return Field;


}
// solve(read('puzzles.txt'),0)

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

function searchEl(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        const values = posValues(arr,i,j)
        console.log(values[0], values);
        arr[i][j] = values[0];
      }
    }
  }
  return arr
}

function posValues(arr, x, y) {
  const elements = [];
  for (let el of arr[x]) {
    if ( el === '-' ) continue
    elements.push(el)
  }
  console.log(elements);
  for (let i=0; i < arr.length; i++) {
    if (arr[i][y] === '-') continue
    elements.push(arr[i][y])
  }
  const posVal = [];
  for (let i = 1; i < 10; i++) {
    if (elements.includes(`${i}`)) continue
    posVal.push(`${i}`)
  }
//   console.log(posVal);
  return posVal
}

// console.log(posValues(solve(read('puzzles.txt'),0),3,4));
console.table(searchEl(solve(read('puzzles.txt'),0)))