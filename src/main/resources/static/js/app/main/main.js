define(function (require) {
   let template = require('text!./main.html');
   require('css!./main.css');

   return {
       template: template
   }
});