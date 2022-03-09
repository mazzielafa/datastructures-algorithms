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

For example, if the array , , so return .

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
    reduce() method to find or calculate the sum of an array of       numbers - will give a simple output value
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