/* 5.  Complete the method/function so that it converts dash/underscore delimited words into camel casing.  The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

          Examples
          "the-stealth-warrior" gets converted to "theStealthWarrior"
          "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
          */

        // ! incomplete

     function toCamelCase(str){
            //The first letter of the word needs to be a capital letter
            // create a variable
            //Upper Camel Case = Pascal case
            //possible methods .toUpperCase, .split(), .charAt()
            //regex options?  
        let theStealthWarrior = "TheStealthWarrior"
        let words = str.toUpperCase().split("")
        for (let i= 0; i < str.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
            }
              return words.join("")
    }