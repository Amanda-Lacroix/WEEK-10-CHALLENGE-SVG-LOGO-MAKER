// NPM packages for this application
const generateLogo = require ('./generateSVG');

// Test to make sure logos are generating correctly after input is given
test('This will test if the user input matches the output', () => {
    const answers = {
        shapes: 'Square',
        shapecolour: 'black',
        textcolour:'white',
        text:'AAA'
    };

    const results = `<svg width="100" height="100">
    <rect x="10" y="10" width="80" height="80" fill="${answers.shapecolour}" />
    <text x="50" y="50" font-size="30" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
  </svg>`;


    expect(generateLogo(answers).trim()).toEqual(results.trim());
});
