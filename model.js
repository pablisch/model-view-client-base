class Model {
  constructor() {
    this.x = [];
  }

  setX(data) {
    this.x = data;
    // console.log(this.x) //VISIBILITY
  }

  getX() {
    return this.x;
  }
}

module.exports = Model;