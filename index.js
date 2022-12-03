//1. Two Integers

function greaterThan (int_1, int_2) {
    if (int_1 > int_2) {
        return `${int_1} is greater than ${int_2}`
    } else if (int_1 < int_2) {
        return `${int_2} is greater than ${int_1}`
    } else if (int_1 === int_2) {
        return `${int_1} is equal to ${int_2}`
    } else if (int_1 === 420 || int_1 === 69 || int_2 === 69 || int_2 === 420) {
        return `nice`;
    }
};

console.log(greaterThan(69))

//2. Odd or even

function oddOrEven (number) {
    if (number % 2 === 0 ){
        return `${number} is even`
    } else {
        return `${number} is odd`
    }
};

console.log(oddOrEven(69));


