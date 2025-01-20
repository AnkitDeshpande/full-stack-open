const myName: string = "Ankit";

const age: number = 27;

const isMarried: boolean = false;

const arr: number[] = [1, 2];

function add(x: number, y: number): number {
    //x should be number, 
    // y should be number 
    // and the function should return a number
    return x + y;
}

let x = add(1, 2);
// add("4", "5") //should fail

const sum = (x: number, y: number): number => x + y;

type User = {
    username: string;
    age: number;
    isMarried: false;
    animal?: Animal;
}

type Animal = {
    hasLegs: boolean;
    veg: boolean;
}

const ankit: User = {
    username: "ankit",
    age: 27,
    animal: {
        hasLegs: true,
        veg: true,
    },
    isMarried: false,
}

const mayur: User = {
    username: "mayur",
    age: 30,
    isMarried: false
}

//inheritance
interface PetAnimals {
    legs: boolean,
    cute: boolean,
}

interface Dog extends PetAnimals {
    food: String
}

const dog: Dog = {
    cute: true,
    food: "pedegree",
    legs: true
}

const myPets: Dog[] = [ // this is for array objects
    {
        food: "pedigree",
        cute: true,
        legs: true
    }
];

//coposition
type WildAnimals = {
    legs: boolean,
}

type Tiger = {
    veg: boolean
}

const tiger: Tiger & WildAnimals = { //there is also OR ( | )
    legs: true,
    veg: false
}
//=================================================


enum Color {
    RED,
    GREEN,
    BLUE
}


console.log(myName);
console.log(age);
console.log(isMarried);
console.log(arr);
console.log(x);
console.log(sum);
console.log(ankit);
console.log(mayur);
console.log(dog);
console.log(tiger);
