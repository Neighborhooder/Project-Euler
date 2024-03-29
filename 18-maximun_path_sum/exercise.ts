/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                  75
                 95 64
                17 47 82
               18 35 87 10
              20 04 82 47 65
             19 01 23 75 03 34
            88 02 77 73 07 63 67
           99 65 04 28 06 16 70 92
          41 41 26 56 83 40 80 70 33
         41 48 72 33 47 32 37 16 94 29
        53 71 44 65 25 43 91 52 97 51 14
       70 11 33 28 77 73 17 78 39 68 17 57
      91 71 52 38 17 14 91 43 58 50 27 29 48
     63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/

import { AbstractSolution, RunSolution } from "../utils/solution";

@RunSolution
export class Solution18 extends AbstractSolution {

    private readonly INPUT = `
    75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
    `.split("\n")
        .filter(line => !!line.trim())
        .map(line => {
            return line.replace(/\s+/g, " ")
                .split(" ")
                .filter(str => !!str.trim())
                .map(numStr => parseInt(numStr));
        });


    //use this to cache so we don't explore branches more than once
    private calcMap = new Map<string, number>();

    getProblemName(): string {
        return "Maximum Path Sum I";
    }

    protected solve() {
        return this.calcBranch(this.INPUT, 0, 0);
    }

    /**
     * Recursive implementation
     * We'll branch out in the available paths
     * Using a cache enables us to avoid exploring subtrees more than once
     * @param input 
     * @param rowIndex 
     * @param columnIndex 
     * @returns 
     */
    private calcBranch(input: number[][], rowIndex: number, columnIndex: number): number {

        let sum = 0;

        if (rowIndex === input.length) {
            sum = 0;
        } else if (columnIndex === input[rowIndex].length) {
            sum = 0;
        } else {
            const index = `${rowIndex},${columnIndex}`;
            if (this.calcMap.has(index)) {
                sum = this.calcMap.get(index)!;
            } else {

                const current = input[rowIndex][columnIndex];
                sum = current + Math.max(
                    this.calcBranch(input, rowIndex + 1, columnIndex),
                    this.calcBranch(input, rowIndex + 1, columnIndex + 1)
                );

                this.calcMap.set(
                    index,
                    sum
                );
            }

        }

        return sum;
    }

}