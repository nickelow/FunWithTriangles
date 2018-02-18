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
	 //Check to make sure all of the sides are greater than 0
		if(triangle.filter(side=>side <= 0).length > 0){
			console.log('Triangle sides must be greater than 0');
			return false;
		}
	  //Check to make sure all of the sides adhere to the geometric conditions of a triangle. 
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
      //Create a set using the values given
      const numberOfDifferentSides = new Set(triangle)
     //The size of the set tells you how many unique values were in the array, and each number 1-3  corresponds
     // to a property in the triangleTypes object whose value is a string representing the correct triangle type
      return triangleTypes[numberOfDifferentSides.size]
		} else {
			return 'invalid triangle';
		}
	}
}
