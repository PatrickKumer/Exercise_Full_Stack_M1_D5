const printTitle = function(nameOfTitle){
    console.log(`\n-----------${nameOfTitle}---------`)
}



/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System 
if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

printTitle("Exercise 1")

function rectangle (l1, l2){
    let resultOfRectangle = l1 * l2
    return resultOfRectangle
}

let result = rectangle (10, 10)
console.log("The area of and rectangle is:", result)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum 
 multiplied by 3.
*/

printTitle("Exercise 2")

function crazySum(a, b){
    if(a !== b){
        return (a + b)
    } else {
        return ((a + b) * 3)
    }
}

let result1 = crazySum(3, 3)
console.log("The solution is:", result1)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

printTitle("Exercise 3")


function crazyDiff (c){
    if (c > 19){
        return Math.abs (c - 19) * 3
    }else {
        return Math.abs (c - 19)
    }
}

let result3 = crazyDiff (20)
console.log("The solution is:", result3)

//function crazyDiff

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n 
 is within 20 and 100 (included) or if n it's equal to 400.
*/

printTitle("Exercise 4")

function boundary (n){
    if ((n>20 && n<=100) || n===400) {
        return true
    } else {
        return false
    } 
}

let number = boundary(23)
console.log(number)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive",
 then it should just return the original string.
*/

printTitle("Exercise 5")

function strivify (word){
    if (word.startsWith("Strive")){
        return word
    } else {
        return "Strive" + word
    }
}

console.log(strivify("is studying"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is 
 a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

printTitle("Exercise 6")

function check3and7(f){
    if(f >= 0 && (f % 3 === 0 || f % 7 === 0)){
        return true
    } else {
        return false
    }
}

let result4 = check3and7(24)
console.log(result4)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

printTitle("Exercise 7")

function reverseString (str){
    return str.split("").reverse("").join("")
}

let wordReverse = reverseString("Block")
console.log(wordReverse)

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string 
 passed as a parameter.
*/

printTitle("Exercise 8")

function upperFirst (word1){
    return word1.charAt(0).toUpperCase() + word1.slice(1)
}

let firstUpperCase = upperFirst("mountain")
console.log(firstUpperCase)

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character 
 of a given string passed as a parameter.
*/

printTitle("Exercise 9")

function cutString (word3) {
    return word3.slice(1, word3.length - 1)
}

let cuttingString = cutString("ambient")
console.log(cuttingString)

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers 
 between 0 and 10.
*/

printTitle("Exercise 10")

function giveMeRandom(g){
    const arr = []
    for (let i = 0; i <= g; i++){
        arr.push(Math.floor(Math.random() * 10))
    }
    return arr
}

let numbers = giveMeRandom(4)
console.log(numbers)

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the 
 Homework section of today's Eduflow.
*/