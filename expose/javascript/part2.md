1. Line 12 will print "3". `i` is the index variable for the for loop, which stops when `i >= prices.length()`. prices has 3 items in it, so i will incriment to 3 then exit. Since it is a `var` variable declaration, it will continue existing outside the for loop code block and thus can be printed by line 12.

2. Line 13 will print "150". Since discountedPrice is a `var` variable, it will continue to exist past the for loop block and will contain the last value it was assigned. The last value it was assigned is `prices[2] * (1 - 0.5)` which is 300 * 0.5 = 150.
3. Line 14 will print "150". It prints this since that was the last value assigned to `finalPrice` in the loop, on the third itteration where `i` = 2. `discountedPrice` = 150, and rounding 150 is still 150.
4. This function will return an array reference from the function containing all the discounted values, so containing `[50, 100, 150]`. This is because arrays are returnable objects in JavaScript
5. It will produce a 'not defined' error. This is because the `let` keyword for variable's scope is within the code block it is defined in. Since the variable `i` is declared in the scope of the for loop, after the function leaves the for loop `i` is no longer a valid variable, and the `console.log()` function outside of the loop cannot print it.
6. Similar to Q5, `let` is only defined within the scope of the code block, so since `discountedPrice` is defined inside the body of the for loop, it is no longer accessable in the print statement outside of the loop, line 13.
7. It will print "150", which is the last value that was calculated and stored into the `finalPrice` value in the loop. The variable is declared inside the function body, and the `console.log()` statement is also in the function body, so the variable is still in scope and able to be printed.
8. It will return a reference to the `discounted` array in memory, [50, 100, 150]. The array in memory isn't destroyed until the garbage collector removes it, so since another variable is holding a reference to the array it will continue to stay in memmory on the heap.
9. There will be an undefined variable error since `i` is out of scope. It is declared in the for loop but we are attempting to access it from the function body.
10. Line 12 will print "3". Const values cannot be reassigned, but are allowed to be printed. `length` is in the same scope as the `console.log()` statement and is never reassigned after its initialization so theres no errors thrown.
11. The function can still successfully return the array. The address assigned to the const array cannot be changed, but the contents can be directly indexed into and changed. What would not be allowed is assigning a new array to the variable, since that would change the reference value.
12. 
- A: student.name
- B: student["Grad Year"]
- C: student.greeting()
- D: student["Favorite Teacher"].name
- E: student.courseLoad[0]

13:
- A: `'32'`.  This is because the `+` opperator can be use mathmatically or to add strings together. If a string is present then the other value is also converted to its string represntation and concatinated.
- B: `1`. This happens because `-` is a purely mathmatical symbol in JS, so it attempts to convert '3' to a number and evaluate the expression.
- C: The answer is `3` because null is converted to a number, which is represented as zero in this context.
- D: '3' + null is `'3null'` because of the presence of the string, null is also converted to a string and concatinated.
- E: `4`. This happens because the + opperator tries to do a mathmatical addition and converts `true` to the value 1, so 3 + 1 = 4.
- F: This is `0` because null and false are both converted to numbers, and are both zero in their numerical form. Thus, 0 + 0 = 0.
- G: `3undefined`. Since '3' is a string, the `+` opperator will convert the other opperands to strings, resulting in the concatination of 'undefined' onto '3'.
- H: `NaN` because the subtraction symbol turns both opperands to their mathmatical forms. '3' is 3, but undefined is NaN in math, so NaN + 3 is still NaN.

14:
- A: `true` since opperands of different types are converted to numbers for standard comparisions. '2' becomes 2, and 2 > 1 is a true statement.
- B: `false` since strings are compared character by character by dictionary order/lexographically. '2' is found after '1' lexographically, so the comparision stops there and is evaluated as false.
- C: `true` because opperands with different types are converted to numbers for the `==` operator, and so '2' becomes 2, and 2 == 2 is true.
- D: This evaluates as `false` because the `===` operand is the "strictly equal' symbol, where both opperands have to be of the same type and value to be evaluated as true. Since it is comparing a number and a string, which are different types, the evaluation is false.
- E: `false` because the boolean value is converted to 1, and 1 does not equal 2.
- F: This is `true` because the `Boolean()` function returns a boolean value depending on what was passed to the function. For numbers it will return `true` for any number orther than 0 or -0. `Boolean(2)` equals `true`, which is a boolean value like the left side of the expression, so the strict equality opperator compares the two values and returns true.

15: The `==` operator will convert the types to try to evaluate the expression, while the `===` is a "strictly equal" sign, which will not do type conversion and only evaluates to true if the type and value of the two operands are the same.
