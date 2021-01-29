"use strict";

// Promise.resolve
// Promise.reject
// Promise.all -> all fulfilled or one rejected
// Promise.race -> first fulfilled or first rejected
// Promise.allSettled (ES2020) -> all fulfilled/rejected
var promise1 = new Promise(function (resolve, reject) {
  return setTimeout(resolve, 50, "promise1");
});
var promise2 = new Promise(function (resolve, reject) {
  return setTimeout(reject, 100, "promise2");
});
var promise3 = new Promise(function (resolve, reject) {
  return setTimeout(resolve, 200, "promise3");
});
var promises = [promise1, promise2, promise3];
Promise.race(promises).then(function (result) {
  return console.log("Promise.race\n", result);
});
Promise.all(promises)["catch"](function (err) {
  return console.log("\nPromise.all\n", err);
});
Promise.allSettled(promises).then(function (result) {
  return console.log("\nPromise.allSettled\n", result);
}); // Possible use case: multiple fields with async validation
// Link -> check for malicious url
// Date -> check for available timeslot
// return success or error messages for all fields
// Possible use case: push notifications!
// instead of for...await loop, you can do a
// Promise.any (proposal stage)
// short-circuits on first fulfil
// throws Aggregate Error
// Promise.any(promises).catch(result => console.log("Promise.any", result));