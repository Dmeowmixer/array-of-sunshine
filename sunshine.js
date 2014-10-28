/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
  var data = str.split("");
  var arr = [];
  arr.push(data.reverse().join(""));
  return arr.toString();
}

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char){
    var temp = str.split("");
    var popped = temp.pop();
    temp.unshift(popped);
    temp.splice(-1,0,char);
    return temp.join("");
}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
//index [0] becomes index [2], add y to index.length;
function speakPigLatin(strArray) {
  var arr = strArray.slice();
  //removes first element and returns
  var temp = strArray.shift();  
  // want to push to .length-1 or -1 
  strArray.splice(-1,0,temp);
  var holdy = "y";
  strArray.push(holdy);
  return strArray;
}