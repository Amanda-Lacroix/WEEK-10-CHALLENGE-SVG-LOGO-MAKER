// NPM packages for this application
const generateLogo = require ('./generateSVG');

// Test to make sure logos are generating correctly after input is given
test('This will test if the user input matches the output', () => {
    const answers = {
        shapes: 'Triangle',
        shapecolour: 'black',
        textcolour:'white',
        text:'AAA'
    };

    const results =  `<svg width="100" height="100">
    <polygon points="50 10, 10 90, 90 90" fill="${answers.shapecolour}" />
    <text x="50" y="60" font-size="20" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
  </svg>`

    expect(generateLogo(answers).trim()).toEqual(results.trim());
});
