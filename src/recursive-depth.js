const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    if(!arr) return depth
    depth++
    let currMax = depth
    arr.map(currElem => {
      if(Array.isArray(currElem)) {
        currMax = Math.max(currMax, this.calculateDepth(currElem, depth))
      }
    })
    return currMax
  }
}
