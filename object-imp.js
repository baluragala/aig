let username = "pim";
let age = 20;
let height = 168;

const person = {
  username: username,
  age: age,
  height: height,
  describe: function() {
    return "name :" + this.username;
  }
};

const person1 = {
  username,
  age,
  height,
  describe() {
    return "name :" + this.username;
  }
};
