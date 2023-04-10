// NPM packages for this application
const generateLogo = require ('./generateSVG');

// Test to make sure logos are generating correctly after input is given
test('This will test if the user input matches the output', () => {
    const answers = {
        shapes: 'Circle',
        shapecolour: 'black',
        textcolour:'white',
        text: 'AAA'
    };

    const results = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n
     
    <circle cx="150" cy="100" r="80" fill="black" />\n

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white" textLength="3"> AAA</text>\n

    </svg>`;

    expect(generateLogo(answers)).toEqual(results);
});
