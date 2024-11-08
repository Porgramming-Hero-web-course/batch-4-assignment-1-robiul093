// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle

function calculateShapeArea (shape: Shape): number{
    // console.log(shape)
    if(shape.shape === 'circle'){
        // console.log(Math.PI * shape.radius ** 2)
        return Math.PI * shape.radius ** 2
    }
    else if(shape.shape === 'rectangle'){
        // console.log(shape.width * shape.height)
        return shape.width * shape.height
    }
    throw new Error ('unknown shape')
}

// const myCircle: Circle = { shape: "circle", radius: 5 };
// const myRectangle: Rectangle = { shape: "rectangle", width: 10, height: 5 };
