let p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "done" });
  }, 4000);
});

p.then(function(data) {
  console.log("Promise Resolved", data);
}).catch(function(err) {
  console.log("Promise Rejected", err);
});

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
p1.then(d => {
  total += d;
  return p2;
})
  .then(d => {
    total += d;
    return p3;
  })
  .then(d => {
    total += d;
    console.log("total", total);
  });
