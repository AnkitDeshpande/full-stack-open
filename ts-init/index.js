var myName = "Ankit";
var age = 27;
var isMarried = false;
var arr = [1, 2];
function add(x, y) {
    //x should be number, 
    // y should be number 
    // and the function should return a number
    return x + y;
}
var x = add(1, 2);
// add("4", "5") //should fail
var sum = function (x, y) { return x + y; };
var ankit = {
    username: "ankit",
    age: 27,
    animal: {
        hasLegs: true,
        veg: true,
    },
    isMarried: false,
};
var mayur = {
    username: "mayur",
    age: 30,
    isMarried: false
};
var dog = [{
        cute: true,
        food: "pedegree",
        legs: true
    }];
var tiger = {
    legs: true,
    veg: false
};
//=================================================
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
