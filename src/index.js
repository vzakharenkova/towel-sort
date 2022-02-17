// function towelSort (matrix) {
//   for (let i = 0; i < matrix.length; i = i + 2) {
//     matrix[i] = matrix[i].reverse();
//   }
//   let arr = matrix.flat();
//   return arr;
// }

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i] = matrix[i].reverse();
  }
  let arr = matrix.flat();
  return arr;
}
