// var names = ['Sehaj', 'Supreet', 'Gurmeet', 'Jasminder']

// names.forEach(function(name){
//     console.log("forEach", name);
// })

// names.forEach((name) => {
//     console.log("ArrowFunctions:", name);
// })

// names.forEach((name) => console.log("ArrowFunctions:", name))

// var returnMe = (name) => name + '!!!!!!!';

// console.log(returnMe('Gurmeet Singh'))

// var person ={
//     name: 'Gurmeet',
//     greet: function(){
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         })
//     }
// }

// person.greet();

function add(a, b){
    return a + b;
}
console.log(add(1, 2));
console.log(add(4, 4));

var addStatement = (a, b) => {
    return a + b
}

var addExpression = (a, b) => a + b

console.log(addExpression(2, 3));
console.log(addStatement(3, 4));
