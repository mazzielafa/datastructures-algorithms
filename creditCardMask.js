/*

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

*/

// return masked string
function maskify(cc) {
    if (cc.length >= 4){
 //   let reversed = cc.reverse()
   let string = cc.split(" ")
   for (let i= 0; i < cc.length; i++){
     if (i <= 4){
       string += cc[i]
   } else {
       string += "#"
     }
   }
     return string.reverse()
  } else{
    return cc
   }
 }
   function reverse(str){
     return str.split(" ").reverse().join()
 } 