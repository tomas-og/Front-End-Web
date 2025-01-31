//boolean print
let flag:boolean = true;
console.log("Value assigned to flag is " +flag);

//number print
let myNumber:number = 234234.2343;
console.log("The value assigned to my number is: "+myNumber);

//String print
let myString:string = "Tom";
console.log("My name is: "+myString);

//any print
let unKnown:any = "xyz";
console.log("This is any the data is: " +unKnown);

//array 
let myArray:Array<string> = ["one", "two", "three"];

let myArray2:number[] = [3, 9 ,3];

for(let i=0;i< myArray2.length;i++){
    console.log("Item: "+myArray2[i]+" is in my second array")
}

//array
myArray2.forEach(
    (elem)=>{
        console.log("Element: "+elem);
    }
);