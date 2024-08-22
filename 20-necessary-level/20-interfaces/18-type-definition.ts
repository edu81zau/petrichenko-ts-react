type SumFunction = (a: number, b: number) => number;

const sum: SumFunction = (a: number, b: number): number => a + b;

let result = sum(1, 2);
console.log(result);
//error TS2322: Type '(a: number, b: number, c: number) => number' is not assignable to type 'SumFunction'.
// const sum1: SumFunction = (a: number, b: number, c: number): number =>
//   a + b + c;

const sum2: SumFunction = (side1: number, side2: number): number =>
  side1 + side2;
