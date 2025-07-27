


function lengthOfString(str, len = 0) {

  if (!str.length) return len;


  let restOfString = str.substring(1);

 
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(arr, sum = 0) {

  if (!arr.length) return sum;

  sum += arr.pop();
  
  return sumOfArray(arr, sum);
}

function findMax(arr, max = arr[0], n = arr.length - 1) {



  if (!arr.length) return null;
  max = Math.max(arr[n], max);


  if (n <= 0) return max;


  return findMax(arr, max, n - 1);
}

function factorial(n) {


  // if our number is less than 0, we have issues, so return null
  if (n < 0) return null;
  // if the number is one or 0, the factorial is just one, and the function can finally return
  if (n <= 1) return 1;

  // the function will keep invoking itself, multiplying the current number
  // with the factorial invoked with the next number down
  return n * factorial(n - 1);
}

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1

  // there's not such thing as negative fibonacci numbers, so return null for negative n
  if (n < 0) return null;
  // well, fibonacci(0) is 0 and fibonacci(1) is 1, so we can set those as our base cases
  if (n <= 1) return n;
  // the next fibonacci number is the sum of the last two fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// factorial(0) = 0
// factorial(1) = 1 * factorial(0)
// factorial(2) = 2 * factorial(1)
// factorial(3) = 3 * factorial(2)

// flip 1 == ['T', 'H'] BASE CASE
// flip 2 == ['TT', 'TH', 'HT' 'HH']
// flip 3 == ['TTT', 'TTH' 'THT' 'THH', 'HTT', 'HTH', 'HHT', 'HHH']

// flip 3 == coinFlips(n - 1).forEach(flip => {

// })

function coinFlips(n) {
  // This function returns an array of all possible outcomes from flipping a coin n times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"

  // if we flip less than once, we should return null
  if (n < 1) return null;
  // the base case is if we only flip once, we should only get heads or tails
  if (n === 1) return ['T', 'H'];
  // we should always return a new set of outcomes
  let newOutcomes = [];
  // the idea is to look at the last set of outcomes, and push T and H to each of them
  coinFlips(n - 1).forEach((flip) => {
    newOutcomes.push(flip + 'T');
    newOutcomes.push(flip + 'H');
  });
  // when you have finished adding, you can return the new outcomes!
  return newOutcomes;
}

function letterCombinations(characters) {
  
  let results = characters;

  function appendResults(n) {
    // if we only want the single letter combinations, we can return the original characters
    if (n <= 1) return characters;
    // let's initialize the array where we will store the next set of combinations
    let newResults = [];
    appendResults(n - 1).forEach((combination) => {
      // we want to add each of the characters to the previous combination
      characters.forEach((character) => {
        // but only add them if we don't already have that letter in the combination
        if (!combination.includes(character))
          newResults.push(combination + character);
      });
    });
    // then update our results to also have the next set
    results = [...results, ...newResults];

    return newResults;
  }
  // then we just invoke our method
  appendResults(characters.length);
  // and return the results
  return results;
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};