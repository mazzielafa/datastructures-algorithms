/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/


function list(names){
    //your code here
    //split the names
  // names.map()
    const result = names.split(", ", "&");
    const resultArr = result.map(e =>{
    })
   for (let i=0; i > names.length; i++) {
     result.push (names[i])
   }
      return result + ", " + names
    
    //return a list of names 
    //separate names by commas
    //last 2 names separated by &
    
  return names
  }