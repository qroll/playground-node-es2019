import "./clearConsole";

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 150, "promise1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "promise2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "promise3")
);

const promises = [promise1, promise2, promise3];

// -> Promise.resolve
// -> Promise.reject

// -> Promise.all
// Promise.all(promises).catch(err => console.log("Promise.all", err));

// -> Promise.race
Promise.race(promises).then(result => console.log("Promise.race", result));

// -> Promise.allSettled (ES2020): all fulfilled/rejected
// Promise.allSettled(promises).then(result =>
//   console.log("Promise.allSettled", result)
// );

// Promise.any (proposal stage)
// short-circuits on first fulfil
// throws Aggregate Error
// Promise.any(promises).then(result => console.log("Promise.any", result));
