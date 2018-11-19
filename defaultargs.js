function calculatePrice(originalPrice, tax) {
  tax = tax || 5;
  console.log(originalPrice, tax);
}

//default args
function calculatePrice(originalPrice, tax = 5) {
  console.log(originalPrice, tax);
}
