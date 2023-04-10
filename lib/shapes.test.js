// NPM packages for this application
const inquirer = require ('inquirer');

// Test to make sure shapes are generating correctly

const shape = generateLogo (answers);
test('This will test if the user input matches the output'), () => {
    const answers = {
        shapes: 'Circle'
        shapecolour: 'black'
        textcolour:'white'
        text: 'AAA'
    }
}

expect(result).toEqual (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
<circle cx="150" cy="100" r="80" fill="${answers.shapecolour}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolour}" textLength="3"> ${answers.text}</text>

</svg>`);
