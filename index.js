
const inquirer = require('inquirer');
const {Triangle} = require("./lib/shapes");
const {Square} = require("./lib/shapes");
const {Circle} = require("./lib/shapes");


function menu() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is the text for your logo?', 
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is the text color for your logo?', 
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape for your logo',
            choices: [
                "circle",
                "square",
                "triangle"
            ] 
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What is the shape color for your logo?', 
        },
    ])
    .then(response => {
        console.log(response);
        let shape;
        if(response.shape === "triangle") {
            shape = new Triangle
        } else if (response.shape === "square") {
            shape = new Square
        } else {
            shape = new Circle
        }
        shape.setColor(response.shapeColor)

        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

        </svg>
        `
        console.log(svg);
    }) 
}

menu();
