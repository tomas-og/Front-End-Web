var flag = true;
console.log("Value assigned to flag is " + flag);
var myNumber = 234234.2343;
console.log("The value assigned to my number is: " + myNumber);
var myString = "Tom";
console.log("My name is: " + myString);
var unKnown = "xyz";
console.log("This is any the data is: " + unKnown);
var myArray = ["one", "two", "three"];
var myArray2 = [3, 9, 3];
for (var i = 0; i < myArray2.length; i++) {
    console.log("Item: " + myArray2[i] + " is in my second array");
}
myArray2.forEach(function (elem) {
    console.log("Element: " + elem);
});
