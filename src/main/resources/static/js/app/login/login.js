define(function (require) {
  let template = require('text!./login.html');
  require('css!./login.css');

  return {
    template: template
  }
});