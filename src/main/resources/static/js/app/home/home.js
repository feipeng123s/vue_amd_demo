define(function (require) {
  let template = require('text!./home.html');
  require('css!./home.css');

  return {
    template: template
  }
})