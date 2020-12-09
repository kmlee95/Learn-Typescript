// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

/**
 * 타입스크립트 장점
 * 1. 코드상에서 맞지 않는 데이터모습을 화면에서만 파악할 수 있는걸 코드상에서 파악 가능하다.(js도구로 에러 사전 방지)
 * 2. 미리 타입을 선언 해주었기 때문에 api속성(정확한 자동완성, vscode intellisense) 제공받을 수 있다.
 */

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser(){
  return axios.get(url);
}

fetchUser().then(function(response){
  response.address.cit;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}


startApp();
