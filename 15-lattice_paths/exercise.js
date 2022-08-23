/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

function paths(n){
    let j = 1
    for (let i = 1; i <= n; i++)
    {
        j = j * (n + i) / i;
    }
    return j;
}

for (let index = 1; index <= 20; index++) {
    p = paths(index)
    console.log(`Matrix ${index}x${index} has ${p} paths`);
}
