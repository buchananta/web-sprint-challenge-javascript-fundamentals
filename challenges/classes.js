// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
}


const cuboidClass = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//A cubes volume, is just the length of one edge, cubed
//A cubes area, is just the length of one edge, squared (that's the surface area of one side) multiplied by six, for six sides.
//However, if I 'use the dimension properties from cuboidmaker' the calculations will look _exactly_ the same?
//I feel like a cuboid should extend a cube, and not the other way around?
class CubeMaker extends CuboidMakerClass {
  constructor(anyEdge) {
    super(anyEdge, anyEdge, anyEdge);
  }
  volume() { return this.length ** 3 }; //I only need one edge.
  surfaceArea() {return (this.length ** 2) * 6 }
}

aCube = new CubeMaker(5);
console.log('cube volume, should be 5**3 or 125: ' + aCube.volume());
console.log('cube surfaceArea, should be 25 * 6, or 150: ' + aCube.surfaceArea());

