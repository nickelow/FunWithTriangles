const expect = require('chai').expect;
const triangle = require('../triangles.js');

describe('Triangle Challenge', function(){
	it('should check to make sure the input is valid', function(){
		expect(triangle.isValidTriangle([10, 20, 30])).to.be.ok;
		expect(triangle.isValidTriangle([10, 20])).to.not.be.ok;
		expect(triangle.isValidTriangle([10, 'test', 30])).to.not.be.ok;
		expect(triangle.isValidTriangle('test')).to.not.be.ok;
	})
	it('should check to make sure the sides create a valid triangle', function(){
    expect(triangle.sidesAreValid([18, 8, 18])).to.be.ok;
    expect(triangle.sidesAreValid([10, 18, 12])).to.be.ok;
    expect(triangle.sidesAreValid([0, 13, 13])).to.not.be.ok;
    expect(triangle.sidesAreValid([5, 8, 3])).to.not.be.ok;
	})
	it('should determine the type of triangle', function(){
		expect(triangle.determineTriangleType([10, 10, 10])).to.equal('equilateral');
		expect(triangle.determineTriangleType([20, 10, 20])).to.equal('isoceles');
		expect(triangle.determineTriangleType([12, 15, 10])).to.equal('scalene');
	})
})
