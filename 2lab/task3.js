function getGradeDescription(grade) {
    if (grade >= 90) return "Відмінно";
    if (grade >= 70) return "Добре";
    if (grade >= 50) return "Задовільно";
    return "Незадовільно";
}

console.log(getGradeDescription(85)); // Добре
 

function getSeason(month) {
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    if (month >= 9 && month <= 11) return "Осінь";
    return "Зима";
}

console.log(getSeason(4)); // Весна

// оператор ?
function getSeasonTernary(month) {
    return month >= 3 && month <= 5 ? "Весна" :
           month >= 6 && month <= 8 ? "Літо" :
           month >= 9 && month <= 11 ? "Осінь" : "Зима";
}

console.log(getSeasonTernary(10)); // Осінь
