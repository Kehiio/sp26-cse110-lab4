1. Line 9 prints "values added:  20"
2. Line 13 prints "final result:  20"
3. `Var` doesn't have block scope, meaning it will always get defined because of hoisting, even if it is declared in an if block. It causes naming issues, scoping issues, and general annoyance for debugging. 
4. Line 9 prints "values added:  20"
5. The code errors because of a reference error, `result` is not defined. This is because unlike `var`, `let`'s scope is within the code block it is defined in.
6. The code errors becuase we try to re-assign a `constant`, which is not allowed.
7. Again, nothing happens because of re-assigning the `constant` causing an error.

