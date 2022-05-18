"use strict";
function fizzbuzz(params) {
    for (let index = 1; index <= params; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log(index + " => FizzBuzz");
        }
        else if (index % 3 === 0) {
            console.log(index + " => Fizz");
        }
        else if (index % 5 === 0) {
            console.log(index + " => Buzz");
        }
        else {
            console.log(index);
        }
    }
}
fizzbuzz(100);
