// Challenges Set A

/*Challenge 1
Create a function called subtractTwo that will accept a number, and return the number minus 2.*/

function subtractTwo(num) {
    return num - 2;
};
console.log(subtractTwo(6));
console.log(subtractTwo(8));
console.log(subtractTwo(30));
console.log(subtractTwo(100));

/*The create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. please do not use the native map or forEach method.*/

function map(arr, callback) {
  let arr2 = [];
  for (var i = 1; i <= arr.length; i++) {
      arr2.push(callback(i));
  };
  return console.log('result', arr2);
};

map([1, 2, 3, 4, 5], subtractTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4


//Challenge 2 
/*Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.*/
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
//native forEach      array.forEach();

function forEach(letters, callback) {
    for (let i = 0; i < letters.length; i++) {
        callback(arr[i]);
    };
};
let results;
let letters = [1,2,3];
console.log(forEach(num * 2));

 
/*Challenge 3
In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.*/

function mapWith(arr, callback) {
  let arr2 = [];
  arr.forEach(e => {
      arr2.push(callback(e));
  });
  return console.log('result1', arr2);
};
mapWith([1, 2, 3, 4, 5], subtractTwo); //-> [2,4,6,8,10]


var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
var int = 0;

function reduce(nums , add, int){
  
  for(var i = 0; i < nums.length; i++){
      add(i,int);
      int++;
      return add(nums);
  };
  
};
console.log(nums);
console.log(add());
console.log(int);
console.log(reduce(nums, add, 0));
