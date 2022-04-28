/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    // enter your majic here
    //can remove the given variable here in order to do a regular expression
    // global + case insentive match
    let vowels = str.match(/[aeiou]/gi) // remove length and place in the return
     // "my pyx" should return 0
     //return a new statement for vowels
    return vowels  === null ? 0 : vowels.length
}
