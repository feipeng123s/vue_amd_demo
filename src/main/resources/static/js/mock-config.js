define(function (require) {
  let Mock = require('mock');

  Mock.mock('/user/list', {
    code: 0,
    data: []
  });

  return Mock
});