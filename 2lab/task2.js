function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(15, 1, 10)); // false

// NOT 
let isActive = true;
isActive = !isActive;
console.log(isActive); // false

