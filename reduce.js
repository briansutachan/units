const food = {
    salmon: "excellent",
    broccoli: "excellent",
    snickers: "foodPorn",
    sirloinSteak: "great",
    banana: "good",
    blueberry: "cool",
    popTarts: "foodPorn"
};

//console.log(food);

// var foodArray = [];
// for(let elem in food) {
//     if(food.hasOwnProperty(elem)){
//         foodArray.push(elem)
//     }
// }
// console.log(foodArray)


//Declarative
// console.log(Object.entries(food));
// console.log(Object.keys(food));
// console.log(Object.values(food));


// const foodPornObj = Object.entries(food).reduce((badFood, [foodName, quality]) =>{
//     if(quality == "foodPron"){
//         badFood[foodName] = quality;
//     }

//     return badFood;
//     },
//     {}
// )


// console.log(foodPornObj)



// const foodPornObj = Object.values(food).reduce((goodFood, quality) =>{
//     if(quality == ""){
//         return goodFood + 1;
//     }

//     return goodFood;
//     },
//     0
// )


// console.log(foodPornObj)

const goodFood = Object.entries(food)
    .filter(([foodName, quality]) => quality == "excellent").map(([foodName]) => foodname);

    const excellentFood = Object.entries(food).reduce((excellentFood, [foodName, quality]) => {
        if(quality == "excellent") {
            excellent.push(foodName);
        }

        return excellentFood;
    },
    {}
);