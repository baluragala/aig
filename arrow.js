const filter = function(e) {
  return e > 6;
};

const filter1 = e => e > 6;

let n = [12, 4, 22, 76, 45, 38];
n.filter(function(e) {
  return e % 2 == 0;
});

const makeName = (firstName, lastName) => {
  let fullName = `${firstName},${lastName}`;
  return fullName;
};

function Person(uname, age) {
  this.uname = uname;
  this.age = age;
  this.describe = () => {
    return `${this.uname},${this.age}`;
  };
}

let p1 = new Person("ram", 13);
let p1Ref = p1.describe;
p1Ref();
