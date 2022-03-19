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