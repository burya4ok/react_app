let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

let names = ['Mike', 'Ben'];
let final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
