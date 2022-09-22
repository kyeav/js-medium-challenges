/**
 * falsy or truthy?
 * given 2 values, return the 1st one if it is falsy,
 * otherwise return the 2nd one
 */

function filterOutFalsy(elem1, elem2) {
    return !!elem1 === false ? elem1 : elem2
    // return !elem1 ? elem1 : elem2
}

function falsyOrTruthy([elem1, elem2]) {
    return !!elem1 === false ? elem1 : elem2
}

console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(falsyOrTruthy([true, 'Dog']))

/**
 * return the length of any given array
 * given an array, return its length
 */

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 1]))
console.log(arrLength([]))

/**
 * get the last element in an array
 * given an array, return the 1st element
 */

function lastElem(arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false]))

/**
 * find the sum of an array
 * given an array, return the sum of every element
 */

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))

/**
 * add up the numbers from a single number
 * given a number, add up all the numbers from one
 * to the number that is given
 * e.g. an input of 4 will give u 1 + 2 + 3 + 4, 
 * which equals 10
 */

function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum += i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))

/**
 * calculate the time
 * given a number in secs,
 * return this number in mm:ss format
 */

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    if (timerSeconds.toString().length === 1) {
       timerSeconds = '0' + timerSeconds
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

/**
 * find the largest number
 * given an array of numbers,
 * return the largest number of that array
 */

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))

/**
 * reverse a string
 * given a string, return the reversed string
 */

// 1. use an incrementing loop
function reverseString(str) {
    let reversedString = ""

    for (let i = 0; i < str.length; ++i) {
        // this is how you loop throught every character in a string
        // console.log(str[i])
        reversedString = str[i] + reversedString
    }
    return reversedString
}

// 2. use a decrementing loop
function reverseString(str) {
    let newStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
} 

// 3. use the array reverse property
function reverseString(str) {
    return str.split('').reverse().join('')
    // .split() converts a string into an array
    // .reverse() reverses an array
    // .join('') converts an array into a string
} 

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))

/**
 * turn every element in an array into 0
 * given an array of elements,
 * return the same length array filled with '0's
 */

// 1. for loop
function convertToZeroes(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
        newArr.push(arr[i])
    }
    return newArr
}

// function convertToZeroes(arr) {
    // for (let i = 0; i < arr.length; ++i) {
        // arr[i] = 0
    // }
    // return arr
// }

// 2. array 'fill'
function convertToZeroes(arr) {
    return new Array(arr.length).fill(0)
}

// 3. array 'map'
function convertToZeroes(arr) {
    return arr.map(elem => 0)
    // map() converts every element in an array into something else
    // RHS of => has an invisible return
    // return arr.map(elem => {
    //  return 0
    // })
}

console.log(convertToZeroes([5, 100, 0]))
console.log(convertToZeroes([12]))
console.log(convertToZeroes([1, 2, 3, 4, 5]))

/**
 * filter out all the apples
 * given an array of fruits,
 * if it is an apple remove it from the array
 */

// 1. for loop
function removeApples(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// 2. array 'filter'
function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')    
}

// function removeApples(arr) {
    // return arr.filter(elem => {
        // return elem !== 'Apple'
    // })
// }

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))

/**
 * filter out all falsy values
 * given an array of values,
 * filter out all falsy values and 
 * only return truthy values
 */

// 1. for loop
function filterOutFalsyValues(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// 2. array 'filter'
function filterOutFalsyValues(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsyValues(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsyValues(['Tomato', 'Orange', 'Banana', false]))
console.log(filterOutFalsyValues(['Banana', 'Orange', 'Apple']))

/**
 * truthy to true, falsy to false
 * given an array of truthy and falsy values,
 * return the same array of elements into its boolean value
 */

function convertToBoolean(arr) {
    return arr.map(elem => {
        if (!!elem === true) {
            return true
        }
        return false
    })
}

// function convertToBoolean(arr) {
    // return arr.map(elem => !!elem)
// }

console.log(convertToBoolean([500, 0, 'David', "", []]))