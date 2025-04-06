/**
 * Calculates the sum of all numbers from 1 up to (and including) n.
 *
 * @example
 * addUpToN(3) // returns 6 (1 + 2 + 3)
 */

export function addUpToN(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(addUpToN(3));
