/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    //return the length of the shortest word
    //string will never be empty

    let newWord = s.split(" ")
    let newArr = []
    for (let i = 0; i < newWord.length; i++){
      newArr.push(newWord[i].length)
    }
    return Math.min.apply(null, newArr)
  //   console.log(newArr)
  }