module.exports = {
	isValidTriangle: function(triangle){
		//Check to make sure input is an array
		if(!Array.isArray(triangle)){
			console.log('Triangle must be an array');
			return false;
		}
    //Check to make sure the triangle has 3 sides
		if(triangle.length !==3){
			console.log('Triangle must have 3 sides');
			return false; 
		}
		//Check to make sure all sides are numbers
		if(triangle.filter(side=>typeof side !=='number').length > 0){
			console.log('Triangle sides must be numbers');
			return false;
		}
		return true;
	},

  sidesAreValid: function(triangle){
  	//store sides in variables for readability
  	const sideA = triangle[0];
  	const sideB = triangle[1];
  	const sideC = triangle[2];
		if(triangle.filter(side=>side <= 0).length > 0){
			console.log('Triangle sides must be greater than 0');
			return false;
		}
		if((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB+ sideC) <= sideA){
			console.log('The sum of 2 sides must always be greater than the other side');
			return false; 
		}

		return true;
  },

	determineTriangleType: function(triangle){
		if(this.isValidTriangle(triangle) && this.sidesAreValid(triangle)){
      const triangleTypes = {
      	1: 'equilateral',
      	2: 'isoceles',
      	3: 'scalene'
      }
      const numberOfDifferentSides = new Set(triangle)
      return triangleTypes[numberOfDifferentSides.size]
		} else {
			return 'invalid triangle';
		}
	}
}