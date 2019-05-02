var words = ["ground", "control", "to", "major", "tom"];

function map (arr, anonFunction) {
  var outputArray = [];
  for (let i = 0; i < arr.length; i++) {
    outputArray.push(anonFunction(arr[i]));
  }
  console.log(outputArray);
  return outputArray;
}




map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});