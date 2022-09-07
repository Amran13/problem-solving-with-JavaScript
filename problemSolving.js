//--------   1. Write a JavaScript program to find the area of a triangle -------------where lengths of the three of its sides are 5, 6, 7. 
var side1 = 5, side2 = 6, side3 = 7;
var s = (side1 + side2 + side3) / 2;
let area = Math.sqrt((s) * (s - side1) * (s - side2) * (s - side3));
// console.log('The are of triangle is : ', area);


// ---------2. Write a function to convert Degree to radian 
function degToRad(deg){
    return console.log("Converting Degree to Radian :", (Math.PI * deg) / 180);
}
// degToRad(360);


// ----------3. find sum of all emelement in an array
// non functional way 
const number = [5, 3, 2, 1, 5];
let sum = 0;
for(var i = 0; i < number.length; i++){
  sum = sum + number[i];
};
// console.log(sum);

// functional way 
function arraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
// console.log(arraySum([5, 3, 2, 1, 5]));

//---------- 4. Find the gretest number  in array 
// non funtional way 
const numbers = [5, 1, 3, 2, 1];
let largest = 0;
for(let i = 0; i < numbers.length; i ++){
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
// console.log(largest);

// functional way 
function largestInArray(numbers){
    let i = 0;
    let largest = numbers[i];
    for( i; i < numbers.length; i++){
        if (numbers[i] > largest){
            largest = numbers[i];
        };
    }
    return largest;
};
// console.log(largestInArray([5, 1, 3, 2, 1]));

//--------- 5. Fibonacci Sereis
// non functional way 
const fibo = [0, 1];
for (let i = 2; i <=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
};
// console.log(fibo);

// functional way 
function fibonacci(nth){
    if (typeof nth != 'number'){
        return 'Please give a number';
    }
    const fibo = [0, 1];
    for(let i = 2; i <= nth; i ++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
// console.log(fibonacci())

// -------------6. Guess the number between 1 to 10 games 
function guessNumber(number){
    const num = Math.ceil(Math.random() * 10);
    if(num == number){
        console.log('matched!!!');
    }
    else{
        console.log(`Try again! \nYour Guess : ${num}\nAns is : ${number}`);
    }
}
// guessNumber(4);