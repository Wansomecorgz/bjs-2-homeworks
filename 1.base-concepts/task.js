"use strict";
 
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
  
  if (d < 0) {
    arr.push();
 
  } else if (d == 0) {
    let root = -b / (2 * a);
    arr.push(root);
  
  } else if (d > 0) {
    let firstRoot = (-b + Math.sqrt(d)) / (2 * a);
    let secondRoot = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(firstRoot, secondRoot);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}