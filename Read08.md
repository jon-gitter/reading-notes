reference for notes is: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators


Assignment operator - assigns a value to its left operand based on the value of its right operand. 

Types of Assignment operators:
Assignment	x = f()	--> x = f()
Addition assignment	x += f() --> x = x + f()
Subtraction assignment	x -= f() -->	x = x - f()
Multiplication assignment	x *= f() -->	x = x * f()
Division assignment	x /= f() -->	x = x / f()
Remainder assignment	x %= f() -->	x = x % f()
Exponentiation assignment	x **= f() -->	x = x ** f()
Left shift assignment	x <<= f() -->	x = x << f()
Right shift assignment	x >>= f() -->	x = x >> f()
Unsigned right shift assignment	x >>>= f() -->	x = x >>> f()
Bitwise AND assignment	x &= f() -->	x = x & f()
Bitwise XOR assignment	x ^= f() -->	x = x ^ f()
Bitwise OR assignment	x |= f() -->	x = x | f()
Logical AND assignment	x &&= f() -->	x && (x = f())
Logical OR assignment	x ||= f() -->	x || (x = f())
Logical nullish assignment	x ??= f() -->	x ?? (x = f())


Comparison operators - A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values.

Types of Comparison operators:
Equal (==) --> Returns true if the operands are equal.
Not equal (!=)	Returns true if the operands are not equal.
Strict equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.
Strict not equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.
Greater than (>)	Returns true if the left operand is greater than the right operand.
Greater than or equal (>=)	Returns true if the left operand is greater than or equal to the right operand.
Less than (<)	Returns true if the left operand is less than the right operand.
Less than or equal (<=)	Returns true if the left operand is less than or equal to the right operand.

--------------------------
refrence for notes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

Loops - offer way to do something repeatedly, they repeat an anction some number of times. Different loop mechanisms offer different ways to determine the start and end points of the loop. 


while statement - executes its statement as long as a specified condition evaluates to true
while loop - if the condition becomes flase the statement within the loop stops executing and control passed to the statement following the loop
    Ex: let x = 8;
        let y = 0;
        while (y < x) {
            y++;
        }
    The example will keep running until it's true, i.e. it will execute until equal to 8.


for loop - repeats until a specified condition evaluates to false.
    Ex: for(let i = 0; i < 10; i++){

    }
    This loop will keep executing until it reaches the limit you set (10) and only increment by 1 if not true.