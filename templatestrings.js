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

console.log(`Username : ${person.username}, Age: ${person.age}


Height:${person.height}`);
