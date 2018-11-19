let apiResponse = {
  username: "baluragala",
  url: "https://github.com/baluragala",
  type: "paid",
  address: {
    city: "milan",
    ward: {
      zone: 1
    }
  }
};

// let username = apiResponse.username;
// let url = apiResponse.url;
// let type = apiResponse.type;

let {
  address: {
    city,
    ward: { zone }
  },
  username: name,
  url,
  type,
  quota = 0
} = apiResponse;
console.log(quota);

//array
let [, lead, ...engineers] = ["Pam", "Lam", "Kam", "Uam"];
