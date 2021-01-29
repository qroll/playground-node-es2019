import _ from "lodash";
import "./clearConsole";

const arrayception = [[1], [2], [3, 4, 5]];

// -> vanilla javascript

// using reduce() and push()
// console.log(
//   arrayception.reduce((flattened, arr) => {
//     flattened.push(...arr);
//     return flattened;
//   }, [])
// );

// using reduce() and concat()
// console.log(arrayception.reduce((flattened, arr) => flattened.concat(arr), []));

// -> the lodash way
// console.log(_.flatten(arrayception));

// -> new: Array.prototype.flat()
// console.log(arrayception.flat());

// -> insert buzz lightyear joke here
// const matryoshka = [[1, [2, [3, [4, [5]]]]]];
// console.log(matryoshka.flat(2));
// console.log(matryoshka.flat(Infinity));

// -> please don't do this 😱
const a = [1, 2, 3];
const b = [4, 5, 6];

a.push(b);
b.push(a);
console.log(a.flat(2));
console.log(a.flat(Infinity));
