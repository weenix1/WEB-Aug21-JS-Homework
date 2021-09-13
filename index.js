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

/* const sum = (num1, num2) => (num1 === num2 ? (num1 + num2) * 3 : num1 + num2); */

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

/* const isFifty = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50; */
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeChar(str, char_pos) {
  let string1 = str.substring(0, char_pos);
  let string2 = str.substring(char_pos + 1, str.length);
  const newStr = string1 + string2;
  return newStr;
}
console.log(removeChar("franklin", 5));

/* const removeChar = (pos, str) => str.slice(0, pos) + str.slice(pos + 1); */
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

/* const findLargestInt = (...args) => args.sort((a, b) => a - b)[args.length - 1]; */

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

/* const createCopies = (str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str + " ";
  }
  return newStr;
}; */

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

/* const startsWith = (str) => str.startsWith("Los") || str.startsWith("New"); */

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
/*
const totalSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
  */

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
function testArray(array) {
  if (
    (array[0] === 1 || array[0] === 3) &&
    (array[1] === 1 || array[1] === 3)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(testArray([1, 3]));

/* const includesNum = (arr) => arr.includes(1) || arr.includes(3); */
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
console.log("10________________________________");
function testArrayWithOut(array1) {
  for (let i = 0; i < array1.length; i++)
    if (array1[i] === 1 || array1[i] === 3) {
      return false;
    } else {
      return true;
    }
}
console.log(testArrayWithOut([2, 4]));

/* const notIncludes = (arr) => !includesNum(arr); */

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
function findLongestStr(arraystr) {
  let max = arraystr[0].length;
  arraystr.map((v) => (max = Math.max(max, v.length)));
  let result = arraystr.filter((v) => v.length === max);
  return result;
}

console.log(findLongestStr(["one", "farm", "facet", "convocation", "monday"]));

/* const findLongestStr = (arr) =>
  arr
    .map((str) => ({ length: str.length, str }))
    .sort((a, b) => a.length - b.length)[arr.length - 1].str; */

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
console.log("_______________________________");
function findTypeOfAngle(angle) {
  return angle < 90
    ? "acute"
    : angle === 90
    ? "right"
    : angle < 180
    ? "obtuse"
    : "straight";
}

console.log(findTypeOfAngle(120));

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
const findIndexOfLargest = (arr) => {
  const temp = [...arr];
  const sorted = temp.sort((a, b) => a - b);
  return arr.indexOf(sorted[arr.length - 1]);
};

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const findLargestEven = (arr) => {
  const evenNums = arr.filter((n) => n % 2 === 0);
  return evenNums.sort((a, b) => a - b)[evenNums.length - 1];
};
/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
const checkSign = (a, b) => (a < 0 && b > 0) || (a > 0 && b < 0);

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
const convertCase = (str) =>
  str.length < 3
    ? str.toUpperCase()
    : str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const checkSumRange = (a, b) => (a + b > 50 && a + b < 80 ? 65 : 80);
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
const numToStringByFactor = (num) => {
  let str = "";
  if (num % 3 === 0) str += "Diego";
  if (num % 5 === 0) str += "Riccardo";
  if (num % 7 === 0) str += "Stefano";

  return str;
};
/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
const getAcronim = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
