//Function that counts the spaces in " test 1 "
function CountSpaces(value) {
    return value.length;
}
console.log(CountSpaces(" test 1 "));
//Function that counts the non spaces in " test 1 "
function CountNoSpaces(value) {
    return value.trim().length;
}
console.log(CountNoSpaces(" test 1 "));
//
function CountBoth(value, spaces) {
    var lenght;
    if (spaces) {
        lenght = value.length;
    }
    else {
        lenght = value.trim().length;
    }
    return lenght;
}
console.log(CountBoth(" test 1 ", true));
console.log(CountBoth(" test 1 ", false));
