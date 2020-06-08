const fs = require('fs');
const file = 'WarAndPeace.txt';

// read file from current directory
fs.readFile(file, 'utf8', function (err, data) {

  //error message incase file cannot be read
  if (err) throw err;

  var wordsArray = splitEachWord(data);
  var wordsMap = createWordMap(wordsArray);
  var resultsArray = arrangeByCount(wordsMap);

  console.log(resultsArray);
  console.log('The word "' + resultsArray[0].name + '" occurs most frequently with ' +
  resultsArray[0].total + ' appearances');


});


function splitEachWord (text) {
  // Splitting string into an array of substrings
  // these include tabs, spaces and newlines
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}


function createWordMap (wordsArray) {

  /*create map for word count that creates 
  a new array with the
  results of calling a function*/
  var wordsMap = {};
 
  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}


function arrangeByCount (wordsMap) {

  // arrange count in descending order
  var resultsArray = [];
  resultsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  resultsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return resultsArray;

}