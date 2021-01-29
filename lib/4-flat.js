"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arrayception = [[1], [2], [3, 4, 5]]; // -> vanilla javascript
// using reduce() and push()

console.log(arrayception.reduce(function (flattened, arr) {
  flattened.push.apply(flattened, _toConsumableArray(arr));
  return flattened;
}, [])); // using reduce() and concat()

console.log(arrayception.reduce(function (flattened, arr) {
  return flattened.concat(arr);
}, [])); // -> the lodash way

console.log(_lodash["default"].flatten(arrayception)); // -> new: Array.prototype.flat()

console.log(arrayception.flat()); // -> insert buzz lightyear joke here

var matryoshka = [[1, [2, [3, [4, [5]]]]]];
console.log(matryoshka.flat(2));
console.log(matryoshka.flat(Infinity)); // -> please don't do this 😱

var a = [1, 2, 3];
var b = [4, 5, 6];
a.push(b);
b.push(a);
console.log(a.flat(2));
console.log(a.flat(Infinity));