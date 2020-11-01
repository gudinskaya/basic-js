const CustomError = require("../extensions/custom-error")
class VigenereCipheringMachine {

  constructor(flag) {
    flag === undefined ? this.flag = true : this.flag = flag
  }

  encrypt(message, key) {
    let encryptedMessage = ''
    let res = 0
    let m = 0
    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0; i < message.length; i++) {
      if (m > (key.length - 1)) m = 0;
      if (message[i].search(/[A-Za-z]/) === -1) {
        encryptedMessage = encryptedMessage + message[i]
      } else {
        res = ((key.charCodeAt(m) + message.charCodeAt(i)) % 26) + 65
        encryptedMessage = encryptedMessage + String.fromCharCode(res)
        m++
      }
    }
    return this.flag === true ? encryptedMessage : encryptedMessage.split('').reverse().join('')
}
  
  decrypt(encryptedMessage, key) {
    let decryptedMessage = ''
    let res = 0
    let m = 0
    encryptedMessage = encryptedMessage.toUpperCase() 
    key = key.toUpperCase()

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (m > (key.length - 1)) m = 0;
      if (encryptedMessage[i].search(/[A-Za-z]/) === -1) {
        decryptedMessage = decryptedMessage + encryptedMessage[i]
      } else {
        res = ((26 + encryptedMessage.charCodeAt(i) - key.charCodeAt(m)) % 26) +65
        decryptedMessage = decryptedMessage + String.fromCharCode(res)
        m++
      }
    }
    return this.flag === true ? decryptedMessage : decryptedMessage.split('').reverse().join('')
  }
}
  
module.exports = VigenereCipheringMachine
