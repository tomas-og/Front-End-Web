//Function that counts the spaces in " test 1 "
function CountSpaces(value:string):number {
    return value.length;
}

console.log(CountSpaces(" test 1 "));


//Function that counts the non spaces in " test 1 "
function CountNoSpaces(value:string):number {
    return value.trim().length;
}

console.log(CountNoSpaces(" test 1 "));

//
function CountBoth(value:string, spaces:boolean):number {
    let lenght: number;

    if(spaces){
        lenght = value.length;
    }
    else {
        lenght =  value.trim().length;
    }

    return lenght;
}

console.log(CountBoth(" test 1 ", true));
console.log(CountBoth(" test 1 ", false));

