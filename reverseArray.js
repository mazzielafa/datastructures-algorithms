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