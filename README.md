# Console-log

The repo includes three files: index.html, script.js and styles.css.

The scripts.js file is an example of our assignments in fewd2. It includes instruction for steps and the code for each step. Each step and its code is commented out.

After reading the readme file, you can rename your assignment to script.js and place it in this folder and test it. I will be happy to get suggestions on better regex for the function. 

When the index.html file is loaded, it has a function inside <script> that uses ajax $.get (doesnt work if file is loaded directly in chrome) to get the script.js file from the folder and then:

1. Replaces extra spaces, and multiple line returns with single space and line return. Splits the data where it has javascript open comment (/ and *) and stores the result into an array. Trims extra spaces from end and start of each index of the array.

Note: The script.js file has to be in below format and has to start in line 1. Having space in line 1 will add extra index to array:
/* Instruction for application 1 ... 
 ...
*/

/* Javascript Code ... 
 ...
*/

/* Instruction for application 2 ... 
 ...
*/

/* Javascript Code ... 
 ...
*/


 
2. Creats a loop and appends each index of the array to a <section> in index.html. Creates three divs and places them inside the <section> called (testscript). Div 1 will be populated with the instruction for the assignment step. Div 2 will have the code for the step. Div 3 will have a button that when clicked, uses a function that takes the script for each step and uses eval (though risky) to run (in console window in the case of our assignments).  

3. It uses "slice" to remove the closing comment (* and /). I tried different ways and got some errors. Note that if the script.js has multiplication sign (*), the array will be splited where it runs to (*). So I had to do it this way. 

Note: Ajax $.get seems to not work when the page is loaded in chrome directly. It works fine in safari or when the file is opened with brackets and then into chrome. I will fix that later. Besides, it works fine in firefox. The only issue with firefox is that it does not wordwrap the instruction div. Firefox does not support css3 word-wrap. So I added overflow scroll to contain the text inside the div. 

