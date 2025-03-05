function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

console.log(findMinMax([5, 2, 9, 1, 7])); // { min: 1, max: 9 }

// Порівняння двох об'єктів
function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(compareObjects({ a: 1 }, { a: 2 })); // false

