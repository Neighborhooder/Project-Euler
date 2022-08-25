/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

import { AbstractSolution, RunSolution } from "../utils/solution";

@RunSolution
export class Solution19 extends AbstractSolution {
    getProblemName(): string {
        return "Counting Sundays";
    }

    protected solve() {
        return this.doSolve();
    }

    private doSolve() {
        let numSundays = 0;
        let lastMonthStartDay = 1;

        for (let year = 1900; year < 2001; year++) {
            for (let month = 1; month < 13; month++) {
                let thisMonthStartDay: number;
                if (month < 12) {
                    thisMonthStartDay = this.getNextMonthStartDay(
                        year,
                        month,
                        lastMonthStartDay
                    );
                } else {
                    thisMonthStartDay = this.getNextMonthStartDay(
                        year + 1,
                        1,
                        lastMonthStartDay
                    )
                }
                if (year !== 1900 && thisMonthStartDay === 0) {
                    numSundays++;
                }
                
                lastMonthStartDay = thisMonthStartDay;
            }
        }
        return numSundays;
    }

    private getNextMonthStartDay(
        currentYear: number,
        currentMonth: number,
        previousMonthStartDay: number
    ): number {
        let numDaysInCurrentMonth: number;
        switch (currentMonth) {
            case 2: numDaysInCurrentMonth = 28 +
                (this.isLeapYear(currentYear) ? 1 : 0);
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: 
                numDaysInCurrentMonth = 31;
                break;
            default:
                numDaysInCurrentMonth = 30;
                break;
        }
        return ((numDaysInCurrentMonth % 7) + previousMonthStartDay) % 7;
    }

    private isLeapYear(currentYear: number): boolean {
        return currentYear % 4 === 0 
            && (
                currentYear % 100 !== 0 
                ||
                currentYear % 400 === 0
            )
    }
}