/*  1. Function Description
Complete the function reverseArray in the editor below.
reverseArray has the following parameter(s):

int A[n]: the array to reverse
Returns

int[n]: the reversed array
Input Format

The first line contains an integer, N, the number of integers in A.
The second line contains N space-separated integers that make up A

Sample Input
4
1 4 3 2
Sample Output
2 3 4 1
*/

function reverseArray(a) {
    // Write your code here
    let revArr = []
   while (a.length){
       revArr.push(a.pop())
   }
   return revArr

}

/* 2.Given an array of integers, find the sum of its elements.

For example, if the array , arr [1,2,3], 1+2+4 so return 6.

Function Description
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):
ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints
Output Format
Print the sum of the array's elements as a single integer.

Sample Input
6
1 2 3 4 10 11
Sample Output
31
*/
function simpleArraySum(ar) {
    // Write your code here
    /* ar = [1,2,3]
    return the sum of the array elements as an integer
    reduce() method to find or calculate the sum of an array of numbers - will give a simple output value
    sum together and find the length or find the index 
    for - loops through a block of code a number of times
    put the return outside the loop
    */
    let sum = 0
    for (let i=0; i < ar.length; i++){
        sum+= ar[i]
    }
    return sum
}


/* 3. In this kata you are required to, given a string, replace every letter with its position in the alphabet.

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

/* 4. Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

  function findOdd(A) {
    //happy coding!
    // HOFs // Loop the array?
    // Find how many odd numbers
  //   
    for (let i = 0; i < A.length; i++){
      let count = 0
      for (let j = 0; j < A.length; j++){
        if (A[i] == A[j])
          count++
      } if (count %2 != 0)
        return A[i]
    }
     return array.from(A)
    return -1
  }
  

  