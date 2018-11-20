const games = ["Cricket", "Football", "Hockey", "Kabaddi"];
const it = games[Symbol.iterator]();
let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}
