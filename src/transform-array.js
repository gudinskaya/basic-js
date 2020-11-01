const CustomError = require('../extensions/custom-error')

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error
  }

  const myArr = arr
  let res = []

  for (let i = 0; i < myArr.length; i++) {

    switch (myArr[i]) {

      case '--double-next':
        if (myArr[i + 1] !== undefined) {
          res.push(myArr[i + 1])
        }
        break

      case '--double-prev':
        if (myArr[i - 1] !== undefined) {
          if (myArr[i - 2] === '--discard-next') {
            continue
          }
          res.push(myArr[i - 1])
        }
        break

      case '--discard-next':
        if (myArr[i + 1] !== undefined) {
          i++
        }
        break

      case '--discard-prev':
        if (myArr[i - 1] !== undefined) {
          if (myArr[i - 2] === '--discard-next') {
            continue
          }
          res.pop()
        }
        break

      default:
        res.push(myArr[i])
    }
  }
  return res
}
