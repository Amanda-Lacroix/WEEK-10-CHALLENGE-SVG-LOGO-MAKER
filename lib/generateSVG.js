// // Renders the shape as choosen by the user 
// function renderShapes(shapes) {
//  switch(shapes) {
//     case'Circle':
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <circle cx="150" cy="100" r="80" fill="${answers.shapecolour}" />
      
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolour} textLength="3"> ${answers.text}ABC</text>
      
//       </svg>`;

//     case 'Triangle':
//         return `<svg width="100" height="100">
//         <polygon points="50 10, 10 90, 90 90" fill="${answers.shapecolour}" />
//         <text x="50" y="60" font-size="20" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
//       </svg>`;

//     case 'Square':
//         return `<svg width="100" height="100">
//         <rect x="10" y="10" width="80" height="80" fill="${answers.shapecolour}" />
//         <text x="50" y="50" font-size="30" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
//       </svg>`;

//     default:
//       return '';
//  }

// }




// Generates images based on inputs for the logo.svg
function generateLogo(answers){
    // const shapes= renderShapes(answers.shapes);
    switch(answers.shapes) {
        case'Circle':
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
            <circle cx="150" cy="100" r="80" fill="${answers.shapecolour}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolour} textLength="3"> ${answers.text}ABC</text>
          
          </svg>`;
    
        case 'Triangle':
            return `<svg width="100" height="100">
            <polygon points="50 10, 10 90, 90 90" fill="${answers.shapecolour}" />
            <text x="50" y="60" font-size="20" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
          </svg>`;
    
        case 'Square':
            return `<svg width="100" height="100">
            <rect x="10" y="10" width="80" height="80" fill="${answers.shapecolour}" />
            <text x="50" y="50" font-size="30" fill="${answers.textcolour}" text-anchor="middle" alignment-baseline="middle" textLength="3">${answers.text}</text>
          </svg>`;
    
        default:
          return '';
     }
}

module.exports= generateLogo;
