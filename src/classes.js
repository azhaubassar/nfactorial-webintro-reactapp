'use strict';

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
const long = new Rectangle(10, 100);
const small = new Rectangle(1,1);

const area1 = square.calcArea();
console.log(area1)

class ColoredRectangle extends Rectangle{
    constructor(height, width, bgColor){
        super(height, width);
        this.bgColor = bgColor;
    }

    showProps(){
        console.log(`${this.bgColor}`)
    }
}

const redRectangle = new ColoredRectangle(10, 10, 'red')
redRectangle.calcArea();

console.log(redRectangle.showProps());
