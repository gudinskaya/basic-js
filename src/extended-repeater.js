const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = ''
  const string = str
  const repeatTimes = options.repeatTimes
  const separator = options.separator
  const addition = options.addition
  const additionRepeatTimes = options.additionRepeatTimes
  const additionSeparator = options.additionSeparator
  let i = 0
  if (additionRepeatTimes === undefined && repeatTimes === undefined) {
    return result += string + addition
  }
  while (i < repeatTimes) {
    
    let k = 0
    result += string
    while (k < additionRepeatTimes) {
      result += addition
      if (k < additionRepeatTimes - 1) {
        result += additionSeparator || '|'
        k += 1
      } else {
        k += 1
      }
    }
      if (i < repeatTimes - 1) {
        result += separator || '+'
        i += 1
      } else {
        break
      }
  }
  return result
}
