# FunWithTriangles
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.


# Design Choices
The type of a triangle (Equilateral, isoceles or scalene) is determined by how many different side lengths there are in a triangle. I originally thought to create an empty storage object, loop through the array of numbers, and either add a new property to the storage object with a value of 1 or increment the already existing property if that side value already existed. This got messy when it came to actually interpreting the information that my storage object was holding, and I realized that using a Set data structure would be a better choice because by definition it will only hold unique values. This made it much easier to actually determine the triangle type because Sets have a native size method that will tell me how many properties the Set contains, and I could use that size method to return a useful value for this solution. Because Sets are a new feature in ES6, I needed to include a  Webpack compiler (which is always fun). 

# Testing
I created two input validation functions to make sure the data being passed to my function was valid. One of the functions makes sure that the input is a valid array with exactly 3 numerical values, and the other checks to make sure the given values actually form a valid triangle. I invoked both of these functions before determining the triangle type in my main function. I used Mocha/Chai to create unit tests for each of the 3 functions. 

# Running the Program
`npm start` should compile the files, and `npm test` will run the unit tests in the test file.

