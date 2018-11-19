function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}

//with rest
function sum(a, b, ...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(total);
}
