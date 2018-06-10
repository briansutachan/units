/*Challenges Set B
Challenge 4
Now we are going to create a function addByX that returns a function that will add an input by x. */
function addByX(a){ 
    function put (b) {
     return console.log(a + b);
 }
  return put
 }
 addByX()
 
 
 var addByTwo = addByX(2);
 addByTwo(1); //should return 3 
 addByTwo(2); //should return 4 
 addByTwo(3); //should return 5 
 
 var addByThree = addByX(3);
 addByThree(1); //should return 4 
 addByThree(2); //should return 5 
 
 var addByFour = addByX(4);
 addByFour(4); //should return 8
 addByFour(10); //should return 14 

/*Challenge 5
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called. */
function once(callback){
        function returned(){        
        return callback('here')
        
    };
    return returned;
};
once();



/*Challenge 6
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter. */

function after() {


}


/*Challenge 7
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. 
HINT: research setTimeout(); */

function delay(callback) {

}