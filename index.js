// NPM Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// Import module created in generateMarkdown.js project to generate the README template
const generateLogo= require('./generateSVG');

// Array of questions for user input into the README.md
inquirer
.prompt ([
    {
        name: `text`,
        type: `input`,
        message: "Please enter 3 characters:"
    
    },

    {
        name: `textcolour`,
        type: `input`,
        message: "Please indictate colour keyword (or hexidecimal number) for the text?"
    
    },

    {
        name: `shapecolour`,
        type: `input`,
        message: "Please indictate colour keyword (or hexidecimal number) for the shape?"
    
    },

    {
        name: `shapes`,
        type: `list`,
        message: "Please select a shape:",
        choices: [`Circle`,`Triangle`,`Square`],

    },

  ])


.then((answers) => {
 const logo = generateLogo (answers)
    // // Write the answers to the logo.svg
    fs.writeFile('logo.svg', logo, (err) =>{
        // gives error message if applicable otherwise give message that it worked
    if (err) {
    
        console.log ("There's been an error");
    } 
    else{
        console.log('Generated logo.svg');
    }
  
  });

});
