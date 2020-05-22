// 1. Copy and paste your prototype in here and refactor into class syntax.

class newCuboidMaker {
    constructor (attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const newCuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attrs) {
        super(attrs);

        this.a = attrs.a;
    }

    cubeVolume() {
        return Math.pow(this.a, 3);
    }

    cubeSurfaceArea() {
        return 6 * Math.pow(this.a, 2);
    }
}

const newCube = new CubeMaker ({
    a: 10,
})

console.log(newCube.cubeVolume()); // 1000
console.log(newCube.cubeSurfaceArea()); // 600
