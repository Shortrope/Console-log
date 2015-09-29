# Console-log

The repo includes three files: index.html, script.js and styles.css.

The scripts.js file is an example of our assignments in fewd2. It includes instruction for steps and the code for each step. Each step and its code is commented out. 

When the index.html file is loaded, it has a function inside <script> that uses ajax $.get to get the script.js file from the folder and then:

1. Replaces extra spaces, and multiple line returns with single space and line return. Splits the data where it has open comment (/*) and stores the result into an array. Trims extra spaces from end and start of each index of the array.
 
2. Creats a loop and appends each index of the array to a <section> in index.html. Creates three divs and places them inside the <section> called (testscript). Div 1 will be populated with the instruction for the step. Div 2 will have the code for the step. Div 3 will have a button that when clicked, uses a function that takes the script for each step and uses eval (though risky) to run (in console window in the case of our assignments).  

3. It uses "slice" to remove the closing comment (*/). I tried different ways and got some errors. If the script.js has multiplication sign (*), the array will be splited where it runs to (*). 

Note: Ajax $.get seems to not work when the page is loaded in chrome directly. It works fine in safari or when the file is opened with brackets and then into chrome. I will fix that later. 
