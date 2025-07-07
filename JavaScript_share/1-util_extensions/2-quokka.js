const a = 5;
const b = 10;
// activate the Quokka extension in VS Code
// and run this file to see the output
const add = (a, b) => {
    if (a < 0) {
        throw new Error("a must be non-negative");
    }
    return a + b;
}

const result = add(5, 3);
const result2 = add(4, 3);

result

// create People class
// with email and phone properties
class People {
    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = '';
        this.phone = '';
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// create list of people
const peopleList = [
    new People('Alice', 25, 'alice@example.com', '123-456-7890'),
    new People('Bob', 30, 'bob@example.com', '234-567-8901'),
    new People('Charlie', 28, 'charlie@example.com', '345-678-9012')
];

// print each person's greeting
peopleList.forEach(person => {
    console.log(person.greet());
});

peopleList.map(person => person.name) //?

peopleList

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }
}

const point1 = new Point(0, 0); 
const point2 = new Point(3, 4);