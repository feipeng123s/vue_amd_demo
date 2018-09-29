define(function (require) {
  let Mock = require('mock');
  let data = JSON.parse(require('text!./data.json'));

  function login(option) {
    let data = JSON.parse(option.body);
    if (data.username === 'admin' && data.password === '123') {
      return {
        success: true
      }
    } else {
      return {
        success: false
      }
    }
  }

  // Mock.mock('/user/login', 'post', login);

  Mock.mock('/user/list', 'get', {
    users: data.users
  });

  Mock.mock('/menu/list', 'get', {
    menu: data.menu
  });

  return Mock
});