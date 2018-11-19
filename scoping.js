var x = 3;

function func(randomize) {
  var x;
  if (randomize) {
    x = Math.random();
    return x;
  }
  return x;
}

func(false);
