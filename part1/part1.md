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




