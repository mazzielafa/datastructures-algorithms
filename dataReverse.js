/* A stream of data is received and needs to be reversed.

          Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

          11111111  00000000  00001111  10101010
          (byte1)   (byte2)   (byte3)   (byte4)
          should become:

          10101010  00001111  00000000  11111111
          (byte4)   (byte3)   (byte2)   (byte1)
          The total number of bits will always be a multiple of 8.

          The data is given in an array as such:
          [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
          */

function dataReverse(data) {
  // Your code here
  //I need to reverse the stream of data
  //Once reversed should become 10101010 00001111 00000000 11111111
  //Total number of bits will always be a multiple of 8
  //create new array
  //Loop through the array
  //reverse the data
  //use functions such as shift, reverse, push, pop if needed

  //create a variable where a new empty array will hold itself
  let revData = []
  //create a loop and create a new array from the array already given
  while (data.length) {
  // ... adds the new length of data
  revData.push(...data.splice(data.length -8, data.length))
  }
    return revData
}