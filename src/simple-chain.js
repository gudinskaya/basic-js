const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value = "") {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (!Number.isInteger(position) || this.getLength() < position) {
      this.chain = []
      throw Error
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },
  
  finishChain() {
    let resArr = this.chain.join("~~")
    this.chain = []
    return resArr
  }
}

module.exports = chainMaker
