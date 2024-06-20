const fs = require('fs');
const inquirer = require('inquirer');
// const Circle = require('./shapes/Circle');
// const Triangle = require('./shapes/Triangle');
// const Square = require('./shapes/Square');
const { Triangle, Square, Circle } = require("./lib/shapes");

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):',
  },
];

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
  }
  shapeInstance.setColor(shapeColor);

  const shapeElement = shapeInstance.render();

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});