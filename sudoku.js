
const fs = require('fs')
const { EOL } = require('os');

function read(nameFile) {
  const file = fs.readFileSync(`${__dirname}/${nameFile}`, 'utf-8');
  const allFieldsStr = file.trim().split(EOL)
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
 // console.table(allFields);
  return allFields
}



function solve(arr, numFild) {

  const Field = arr[numFild];
  return Field;


}



function searchEl(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        const values = posValues(arr,i,j)
       // console.log(values[0], values);
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
  //console.log(elements);
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
















// const fs = require("fs");
// const { EOL } = require('os');

// function read(nameFile) {
//   const file = fs.readFileSync(`${__dirname}/${nameFile}`, 'utf-8');
//   const allField = file.trim('').split(EOL);
//  // console.log(allField); завернули в один массив каждое поле в отдельности
//  const allRows = [];
//  for (let el of allField) {  //все строки-поля
//   for (let i = 0; i < el.length; i += 9) {  //идем по каждому элементу одного ряда
//   allRows.push(el.slice(i, i + 9))       
//  }
// }
// // console.log(allRows);
// const allPlay = [];
// for (let i = 0; i < allRows.length; i += 9) {
//   allPlay.push(allRows.slice(i, i + 9))  //собираем строки в одно поле в один массив
// }
// console.log(allPlay[0]);

// for (let i = 0; i < allPlay.length; i++) { //цикл для перебора каждого игрового поля
//    for (let j = 0; j < allPlay[i].length; j++) { // цикл для перебора элемента конкретного поля
//    allPlay[i][j] = allPlay[i][j].split('');  //каждый ряд игрового поля в массиве

// }
// }
// //console.log(allPlay);
// return allPlay;
// }

// const readd = read();
//  console.log(read());

//  function solve(readd, numFild) {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */

//   const Field = readd[numFild];
//   return Field;


// }





// function searchEl(readd) {
//   for(let i = 0; i < readd.length; i++) {
//     for(let j =0; j < readd[i].length; j++) {
//       if (readd[i][j] === '-') {
//         const values = posValues(readd, i, j);
//         readd[i][j] = values[0];
//       }
//     }
//   }
//   return readd;
// }

// function posValues(readd, x, y) {
//   const elements = [];
//   for (let el of readd[x]) {
//     if (el === '-') continue;
//     elements.push(el);
//   }
//   for (let i = 0; i < readd.length; i++) {
//     if (readd[i][y] === '-') continue;
//     elements.push(readd[i][y])
//   }
//   const posVal = [];
//   for (let i = 1; i < 10; i++) {
//     if (elements.includes(`${i}`)) continue;
//     posVal.push(`${i}`)
//   }
//   return posVal;
// }
// console.table(searchEl(solve(read('puzzles.txt'),0)))
