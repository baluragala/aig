function* generateNumbers() {
  for (let i = 1; i <= 3; i++) {
    console.log(i);
    let p = new Promise(function(resolve, reject) {
      setTimeout(() => resolve(i), 1000);
    });
    yield p;
  }
}

let p1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(2), 1000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(3), 2000);
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(20), 3000);
});

let total = 0;

// function* run() {
//   let r1 = yield p1;
//   let r2 = yield p2;
//   let r3 = yield p3;
//   total = r1 + r2 + r3;
// }

// var it = run();
// it.next().value.then(d =>
//   it.next(d).value.then(d => it.next(d).value.then(d => it.next(d)))
// );

async function run1() {
  let r1 = await p1;
  let r2 = await p2;
  let r3 = await p3;
  total = r1 + r2 + r3;
}
