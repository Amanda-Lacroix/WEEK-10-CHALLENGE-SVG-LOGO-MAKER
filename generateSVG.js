// // Renders the license badge when user makes a choice or defaults to empty string
function renderShapes(shapes) {
 switch(shapes) {
    case'Circle':
        return './Assets/circle.svg';

    case 'Triangle':
        return './Assets/triangle.svg';

    case 'Square':
        return './Assets/square.svg';

    default:
      return '';
 }

}



// Generates images based on inputs for the logo.svg
function generateLogo(answers){
    const shapes= renderShapes(answers.shapes);
    


  return 

}

module.exports= generateSVG;
