// Defines what it means to be a Shape
class Shape {
    constructor() {
      this.color = '';
    }
// Shape class takes in setColor function  
    setColor(color) {
      this.color = color;
    }
  }
// Inherits properties from Shape class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

  module.exports = { Circle, Triangle, Square };