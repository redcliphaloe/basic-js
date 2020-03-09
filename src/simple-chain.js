const chainMaker = {
  getLength() {
    this.chain = this.chain || [];
    return this.chain.length;
  },
  addLink(value) {
    this.chain = this.chain || [];
    value = '( ' + (typeof value == 'undefined' ? '' : value) + ' )'; 
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position % 1 || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error('');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain || [];
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;