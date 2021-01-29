# CSE110 WI21 Lab 4 Part 1

## Variables & Scoping
1. The length of the prices array will be printed, as var usage persists across scopes, and ``i`` is last update at the end of the for-loop.

2. The discounted price prior to rounding for the final price of the price array will be printed, as var usage persists across scope and ``discountedPrice`` is last updated in the final iteration.

3. The rounded final price for the final price of the price array will be printed, as var usage persists across scope and ``finalPrice`` is last updated in the final iteration.

4. The function should return the array [50,100,150] as the prices are iteratively multiplied by the 1 minus the discount and pushed to the array. The array is returned after the for-loop.

5. An error will be thrown that ``i`` does not exist, as its scope is bound to the for-loop.

6. An error will be thrown that ``discountedPrice`` does not exist, as its scope is bound to the for-loop.

7. The rounded final price for the final price of the price array will be printed, as ``finalPrice``'s scope is defined global to the function usage and is last updated in the final iteration of the loop.

8. The function should return the array [50,100,150] as the prices are iteratively multiplied by the 1 minus the discount and pushed to the array. The array is returned after the for-loop. Assuming the console.log errors are ignored, the scope of each variable is appropriate and each variable is not re-declared.

9. An error will be thrown that ``i`` does not exist, as its scope is bound to the for-loop.

10. An error will be thrown that ``discountedPrice`` does not exist, as its scope is bound to the for-loop.

11. Assuming the ``finalPrice`` was successfully re-assigned despite the const declaration, it would be the final rounded discounted price of the final element, as it was declared outside of the loop and declared in the final iteration. However, because it is constant, an error would be thrown as it can not be re-assigned.

12. Assuming assignment errors are ignored, the function should return the array [0,0,0], as ``finalPrice`` can not be re-defined and discounted can be updated. Thus, 0's would be continually pushed for each price. That said, if all assignments were successful in re-assigning values, the array would be [50,100,150] as loop would continually push the discounted prices to ``discounted``.

## Data Types

13. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

## Basic Operators & Type Conversion

14. Output Statements:
    A. ``'3'+ 2`` yields ``'32'`` as the 2 converts to a String to match to the 3, which then append as + is defined for strings.
    B. ``'3' - 2`` yields ``1`` as the '3' converts to a 3 as subtraction is defined for ints but not strings.
    C. ``3 + null`` yields ``3`` as the null converts to an integer(0) to match the 3 for the string + operation.
    D. ``'3' + null`` yields ``'3null'`` as the null converts to a string to match the '3' as + is defined for strings.
    E. ``true + 3`` yields ``4`` as the true converts to a 1 for the + operation, which is defined for ints but not booleans.
    F. ``false + null`` yields ``0`` as false and null both convert to ints for the + operation which is defined directly for int but not booleans.
    G. ``"3" + undefined`` yields ``'3undefined'`` as the undefined converts to a string to match the "3" as + is defined for strings.
    H. ``"3" - undefined`` yields ``NaN`` as the undefined is unable to convert to a defined number for the - operation.

15. Output Statements:
    A. ``'2' > 1`` yields ``true`` as the values are converted to numbers to match the 1 and 2 is greater than 1.
    B. ``‘2’ < ‘12’`` yields ``false`` as '12' comes after '2' lexicographically.
    C. ``2 == ‘2’`` yields ``true`` as the '2' is converted to a number and == does not compare type.
    D. ``2 === ‘2’`` yields ``false`` as they are different types and === uses type.
    E. ``true == 2`` yields ``false`` as the true converts to a 1 to compare and the two are not equal.
    F. ``true === Boolean(2)`` yields ``true`` as Boolean() will yield true as long as the parameter is not false, null, or undefined.

16. ``==`` will check equality disregarding data type. Conversions will be utilized to evaluate equality. ``===`` will match data type to check for equality; thus, no conversions will be made for comparison.

17. The conditional prints ``How are you?`` as the 2 is converted to a boolean equivalent to Boolean(2), which is true as 2 is defined and not null or 0.

18. The answer is in part1-question18.js 

## Functions

19. The resultant array from the given code is ``[6,8,10]``. Upon input of the array ``[1,2,3]``, each input is iterated upon, calling ``doSomething`` on each number with a callback function that multiplies the result on the original number + 2. Thus, 2 is added to each number, and then the result is multiplied by 2. All of these numbers are pushed to ``newArray``, which is returned after the loop.

## setInterval(), setTimeout(), clearTimeout()

20. The answer is in part1-question20.js 

21.  The code will print the following:
    ```
    1
    4
    3
    2
    ```
The 1, 4, and 3 will print sequentially with the 2 being printed after a second from the 1.
