export function linear_search<T>(arr: T[], value: T) {
  for (let i = 0; arr.length > i; i++) {
    arr[i] === value ? console.log(i) : console.log(-1);
  }
}
linear_search([3, 4, 5, 2, 7], 7);
