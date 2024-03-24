/*Question 1:*/
let ages=[3,9,23,64,2,8,28,93];/*declare an array*/
let sum=0/*declare a variable*/
console.log(ages[ages.length-1]-ages[0]);
ages.push(7);/*add 7 to the ages array*/
console.log(ages[ages.length-1]-ages[0]);
for (let i=0; i<ages.length; i++){/*calculate the sum of the array*/
    sum+=ages[i];
}
console.log(sum/(ages.length));
/*Question 2:Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/
let names=['Sam','Tommy','Tim','Sally','Buck','Bob'];
let sumLetters=0;
for (let name of names){
    sumLetters+=name.length;/*calculate the sum of the array*/
}
console.log(sumLetters/names.length);/*calculate the average of the array*/
console.log(names.join(" "));/*concatenate all the names together with space in between*/
/*Question 3:How do you access the last element of any array?*/
console.log("I access the last element of an array by calling its index number, which is (arrayName.length-1)");
/*Question 4:How do you access the first element of any array?*/
console.log("I access the first element of an array by calling its index number, which is [0]");
/*Question 5:Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/
let nameLengths=[];
for (let name of names){
    nameLengths.push(name.length);/*push into nameLengths array every name length in names array*/
}
console.log(nameLengths);
/*Question 6:Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let sumLetter=0
for (i=0;i<nameLengths.length;i++){
    sumLetter+=nameLengths[i]/*calculate the sum of the array*/
}
console.log(sumLetter);
/*Question 7:Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
const repeatWord = (word,n)=> word.repeat(n);/*using repeat method for string*/
console.log(repeatWord('Hello',2));
/*Question 8:Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/
const fullName=(firstName,lastName)=>firstName + " " + lastName; /*arrow function for concatenate names*/
console.log(fullName("Tu","Le"));
console.log(fullName("Jerrod","Hall"));
/*Question 9:Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
const greaterThan100=array=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];/*calculate the sum of the array*/
    }
    if (sum>100){return true;} else {return false;}/*check if the sum is greater than 100*/
}
console.log(greaterThan100([5,2,7]));
console.log(greaterThan100([50,20,70]));
/*Question 10:Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
const averageElements=array1 =>{
    let sum=0;
    for(let i=0;i<array1.length;i++){
        sum+=array1[i];/*calculate the sum of the array*/
    }
    return sum/array1.length;/*calculate the average of the array*/
}
console.log(averageElements([2,4,6,60]));
/*Question 11:Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
const compareArrays=(arr1,arr2) =>{
    let sum1=0;
    let sum2=0;
    for(let i=0;i<arr1.length;i++){
        sum1+=arr1[i];/*calculate the sum of the first array*/
        sum2+=arr2[i];/*calculate the sum of the second array*/
    }
    if((sum1/arr1.length)>(sum2/arr2.length)){
        return true;/*compare the average of two arrays*/
    }else {return false;}
}
console.log(compareArrays([2,4,6,10],[2,9,2,100]));
console.log(compareArrays([2,4,6,100],[2,9,2,10]));
/*Question 12:Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
const willBuyDrink=(isHotOutside,moneyInPocket)=>{
    if (isHotOutside && moneyInPocket>10.50){
        return true;
    }else {return false;}
}
console.log(willBuyDrink(true,2));
console.log(willBuyDrink(true,10.51));
console.log(willBuyDrink(false,2));
console.log(willBuyDrink(false,20));
/*Question 13:Create a function of your own that solves a problem. In comments, write what the function does and why you created it*/
const fahrenheitToCelcius=temp1=>(temp1-32)*5/9;/*to convert Fahrenheit temperature to Celcius*/
const wearLayers=temp1=>{/*check to see if I need to wear a jacket or layers in Celcius degree. I'm from Vietnam so we are more familiar with Celcius temperature than Fahrenheit*/
    if (fahrenheitToCelcius(temp1)>23){
        return `The weather is nice today! It is ${fahrenheitToCelcius(temp1)}! You do not need layers!`;
    }else if (fahrenheitToCelcius(temp1)<23 && fahrenheitToCelcius(temp1)>20){
        return `The weather is cooler today! It is ${fahrenheitToCelcius(temp1)}! Consider wearing long-sleeved or jacket!`;
    }else{
        return `The weather is cold today! It is ${fahrenheitToCelcius(temp1)}! Bundle up!`;
    }
}
console.log(wearLayers(50));
console.log(wearLayers(70));
console.log(wearLayers(75));