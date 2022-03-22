/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.  The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

          Examples
          "the-stealth-warrior" gets converted to "theStealthWarrior"
          "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
          */

function toCamelCase(str){
    //will use regex to avoid multiple lines of code.
    //regex will create expressions that will search and replace my operation
    //place regex in a seperate variable and then call it in the return
    let regEx = /[-_]\w/ig
    //use match with regEx
    return str.replace(regEx,(match) =>{
        return match[1].toUpperCase()
    })
          
}