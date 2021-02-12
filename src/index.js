
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];
  matrix.map((el, i) => i % 2 ? el.reverse().map(el => arr.push(el)) : el.map(el => arr.push(el)));
  return arr
}

