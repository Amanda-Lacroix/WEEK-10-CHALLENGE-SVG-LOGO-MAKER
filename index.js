// NPM Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Import module created in generateSVG project to generate the logo
const generateLogo= require('./lib/generateSVG');

// Array of questions for user input to render the logo
inquirer
.prompt ([
    {
        name: `text`,
        type: `input`,
        message: "Please enter 3 characters:",
        validate: function (input){
            if (input.length === 3)
            return true;
            else 
            return "Input must be exactly 3 characters, please try again"
        }
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
