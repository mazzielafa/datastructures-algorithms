/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function alphabetPosition(text) {
    //convert alphabet into an array
    // split the string into numbers
    //filter through the alphabet/numbers
    //join the string together
    let alphabet ="abcdefghijklmnopqrstuvwxyz"
    return text.toLowerCase().split("")
    .filter(a => alphabet.indexOf(a) >= 0)
    .map(a => alphabet.indexOf(a)+1)
    .join(' ')
  }
  // console.log(alphabetPosition)