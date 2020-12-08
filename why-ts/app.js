// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // username = user.name;
      // email = user.email;
      // address = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
