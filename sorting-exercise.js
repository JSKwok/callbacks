/*
var array = [10, 2, 5, 1, 9];
array.sort((a, b) => a - b);
console.log(array);
*/

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "brucee",   age: 35 },
  { id: 6, name: "alex",     age: 15 }
];

students.sort((a, b) => {
  if (a['name'] < b['name']) {
    return -1;
  }
  if (a['name'] > b['name']) {
    return 1;
  }
  if (a['name'] === b['name']) {
    if (a['age'] < b['age']) {
      return 1;
    }
    if (a['age'] > b['age']) {
      return -1
    }
  }
  return 0;
})

console.log(students);