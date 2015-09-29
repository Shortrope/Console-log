/* 
STEP 1
Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window. */

/*
var floatNum = prompt("Please enter a floating point number:");
console.log(Math.floor(floatNum));
*/


/* 
STEP 2
Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window. */

/*
var setOfNum = prompt("Enter a set of five numbers, each seperated by a comma:");
setOfNum = (setOfNum.split(","));

console.log("Max: " + Math.max.apply(Math, setOfNum));
console.log("Min: " + Math.min.apply(Math, setOfNum));
*/


/* 
STEP 3
Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.  */ 

/*
var sqr = prompt("Enter a number to check for its square root:");
console.log(Math.sqrt(sqr));
*/

/* 
STEP 4
Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.  */ 

/*
var today = new Date();
var today = today.toDateString().split(" ")[0];
console.log("Today is: ");
console.log(today);
var today2 = new Date();
today2.setDate((today2.getDate()) - 1);
var yesderday = today2.toDateString().split(" ")[0];

console.log("Yesterday was: ");
console.log(yesderday);
*/    


/* 
STEP 5
Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window.   */ 

/*
var ursula = {fullName: "ursula", mark: 80};
var paul = {fullName: "paul", mark: 77};
var henry = {fullName: "henry", mark: 88};
var tabitha = {fullName: "tabitha", mark: 95};
var lucy = {fullName: "lucy", mark: 68};

function showMyGrade(name) {
    
    if (name.mark < 60){
        msg = name.fullName + ": Your grade is F";
        console.log(msg);   
    } else if (name.mark < 70) {
        msg = name.fullName + ": Your grade is D";
        console.log(msg);
    } else if (name.mark < 80) {
        msg = name.fullName + ": Your grade is C";
        console.log(msg);
    } else if (name.mark < 90) {
        msg = name.fullName + ": Your grade is B";
        console.log(msg);
    } else if(name.mark < 100 ) {
        msg = name.fullName + ": Your grade is A";
        console.log(msg);
    }
    
};
showMyGrade(ursula);
showMyGrade(paul);
showMyGrade(henry);
showMyGrade(tabitha);
showMyGrade(lucy);
*/


/*
STEP 6
Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task. */

/*
for (i = 1; i <= 100; i++){
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        msg = "FizzBuzz (" + i + " is a multiple of 5 and 3.)";
        console.log(msg);   
    } else if ((i % 3) == 0) {
        msg = "Buzz (" + i + " is a multiple of 3.)";
        console.log(msg);
    } else if ((i % 5) == 0) {
        msg = "Fizz (" + i + " is a multiple of 5.)";
        console.log(msg);
    }
    
};
*/


/*
STEP 7

In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2.	Create a for loop that loops 10 times.
3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
*/

/*
var coinFlip;
for(i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0){
        console.log("Heads");
        
    } else if (coinFlip === 1){
        console.log("Tails");
    }
}
*/

/*
STEP 8

Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

/*
var traingle = "";
for(i = 0; i < 7; i++) {
    traingle = traingle + "#";
    console.log(traingle);
}
*/