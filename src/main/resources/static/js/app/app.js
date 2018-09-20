define(function (require) {
  let template = require('text!./app.html');
  require('css!./app.css');

  return {
    template: template,
    data() {
      return {
        message: 'App'
      }
    }
  };
});