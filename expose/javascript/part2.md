1. Line 12 will print "3". `i` is the index variable for the for loop, which stops when `i >= prices.length()`. prices has 3 items in it, so i will incriment to 3 then exit. Since it is a `var` variable declaration, it will continue existing outside the for loop code block and thus can be printed by line 12.
2. Line 13 will print "150". Since discountedPrice is a `var` variable, it will continue to exist past the for loop block and will contain the last value it was assigned. The last value it was assigned is `prices[2] * (1 - 0.5)` which is 300 * 0.5 = 150.
3. Line 14 will print "150". It prints this since that was the last value assigned to `finalPrice` in the loop, on the third itteration where `i` = 2. `discountedPrice` = 150, and rounding 150 is still 150.
4. This function will return an array reference from the function containing all the discounted values, so containing `[50, 100, 150]`. This is because arrays are returnable objects in JavaScript
5. It will produce a 'not defined' error. This is because the `let` keyword for variable's scope is within the code block it is defined in. Since the variable `i` is declared in the scope of the for loop, after the function leaves the for loop `i` is no longer a valid variable, and the `console.log()` function outside of the loop cannot print it.
6. Similar to Q5, `let` is only defined within the scope of the code block, so since `discountedPrice` is defined inside the body of the for loop, it is no longer accessable in the print statement outside of the loop, line 13.
7. It will print "150", which is the last value that was calculated and stored into the `finalPrice` value in the loop. The variable is declared inside the function body, and the `console.log()` statement is also in the function body, so the variable is still in scope and able to be printed.
8. It will return a reference to the `discounted` array in memory, [50, 100, 150]. The array in memory isn't destroyed until the garbage collector removes it, so since another variable is holding a reference to the array it will continue to stay in memmory on the heap.
9. s
10. s
11. s
