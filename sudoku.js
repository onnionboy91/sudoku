const fs = require("fs");
const { EOL } = require('os');

function read() {
  const file = fs.readFileSync("./puzzles.txt", "utf-8");
  const allField = file.trim('').split(EOL);
 // console.log(allField); завернули в один массив каждое поле в отдельности
 const allRows = [];
 for (let el of allField) {  //все строки-поля
  for (let i = 0; i < el.length; i += 9) {  //идем по каждому элементу одного ряда
  allRows.push(el.slice(i, i + 9))       
 }
}
//console.log(allRows);
const allPlay = [];
for (let i = 0; i < allRows.length; i += 9) {
  allPlay.push(allRows.slice(i, i + 9))  //собираем строки в одно поле в один массив
}
//console.log(allPlay);

for (let i = 0; i < allPlay.length; i++) { //цикл для перебора каждого игрового поля
   for (let j = 0; j < allPlay[i].length; j++) { // цикл для перебора элемента конкретного поля
   allPlay[i][j] = allPlay[i][j].split('');  //каждый ряд игрового поля в массиве

}
}
//console.log(allPlay);
return allPlay;
}


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

}

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


