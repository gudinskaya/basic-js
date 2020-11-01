const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = matrix.flat(Infinity)
  let count = 0
  let i = 0
  while (i < array.length) {
    if(array[i] === "^^") {
      count += 1
      i += 1
    } else {
      i += 1
    }
  }
  return count
}
