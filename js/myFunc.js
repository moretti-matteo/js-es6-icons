function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rangeNumCheck(number, min, max) {
    return number >= min && number <= max ? true : false;
}
