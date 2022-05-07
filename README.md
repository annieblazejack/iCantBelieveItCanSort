## What is this?
My friend ran into an interesting sorting algorithm on twitter. We decided to implement it in JavaScript to prove that it actually works. The nested for loop would take a ridiculously long time to sort a large array, but it's a clever idea.

## How does it work?
Using a nested for loop, the function iterates through the array and checks each element against all the other elements in the array, swapping elements when they are out of order. The number of operations it takes to sort the array is the square of the number of elements in the array.

This process seems intuitive to me. Pick up the first thing and check it against all the other things. Then pick up the second thing and repeat...