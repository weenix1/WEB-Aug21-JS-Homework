/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
function intSum(n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    return sum * 3;
  } else {
    return sum;
  }
}
console.log(intSum(2, 2));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkInt(n1, n2) {
  let sum = 50;
  if (n1 === sum || n1 + n2 === sum) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInt(20, 40));
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeChar(str, char_pos) {
  let string1 = str.substring(0, char_pos);
  let string2 = str.substring(char_pos + 1, str.length);
  const newStr = string1 + string2;
  return newStr;
}
console.log(removeChar("franklin", 5));
/* 4. Create a function to find and return the largest of three given integers. */

function findLargeInt(n1, n2, n3) {
  if (n1 > n2 && n2 > n3) {
    return n1;
  } else if (n2 > n1 && n1 > n3) {
    return n2;
  } else if (n3 > n2 && n2 > n1) {
    return n3;
  }
}
console.log(findLargeInt(2, 4, 6));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function checkNumRange(n1, n2) {
  if (
    (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNumRange(44, 50));
console.log(checkNumRange(30, 50));
console.log(checkNumRange(80, 90));
console.log(checkNumRange(80, 120));
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

function createString(str, copy_num) {
  let newStr = str.repeat(copy_num);
  return newStr;
}
console.log(createString("frank ", 3));

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
function displayCityName(cityname) {
  if (
    (cityname.length >= 3 && cityname.substring(0, 3) === "Los") ||
    cityname.substring(0, 3) === "New"
  ) {
    return cityname;
  } else {
    return false;
  }
}
console.log(displayCityName("main york"));

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
console.log("_____________________");
function calcSumArray(array) {
  let sum = array;
  for (let i = 0; i < array.length; i++) {
    sum = array[i];
  }
  return sum;
}
console.log(calcSumArray(2 + 3 + 4));
/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
function testArray(array = [1, 3]) {
  if (
    (array.length[0] === 1 || array.length[0] === 3) &&
    (array.length[1] === 1 || array.length[1] === 3)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(testArray());
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
function findLongestStr() {}

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
