/* 6. A stream of data is received and needs to be reversed.

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
        //order of segments need to be reversed
        //total number will be a multiple of 8
        // .reverse()

        let arrReverse = [1]
        for (let i=1; i < arrReverse.length; i++){
          i+-
          arrReverse.map(data[i])
        }
        return data 
       }
      //   while(arrReverse.length){
      //     arrReverse.push(arrReverse.pop())
      //   }
      //   return arrReverse.length