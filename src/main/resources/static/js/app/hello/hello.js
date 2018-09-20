define(function (require) {
  let template = require('text!./hello.html');
  require('css!./hello.css');

  return {
    template: template,
    data() {
      return {
        message: 'Hello'
      }
    }
  };
});