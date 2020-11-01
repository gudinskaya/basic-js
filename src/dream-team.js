const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  let i = 0
  let dreamTeam = ''
  if (!members || members === undefined) {
    return false
  }
  while (i < members.length) {
    if (typeof(members[i]) !== 'string' || members[i] == false || typeof(members[i]) === 'string' && +members[i] / 0 === Infinity) {
      i += 1
    } else {
      dreamTeam += members[i].trim().substring(0, 1)
      i += 1
    }
  }
  return dreamTeam.toUpperCase().split('').sort().join('')
}
