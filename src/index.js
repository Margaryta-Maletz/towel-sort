
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [], temp = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length ; i++) {
      (i & 1) ? temp = matrix[i].reverse() : temp = matrix[i];
      for (let j=0; j<temp.length; j++) {
          result.push(temp[j]);
      }
    }
}
  return result;
}
