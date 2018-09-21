define(function (require) {
  let template = require('text!./list.html');
  require('css!./list.css');

  return {
    template: template,
    data () {
      return {
        users: [
          {id: 1, name: 'A', sex: 'male'},
          {id: 2, name: 'B', sex: 'female'},
          {id: 3, name: 'C', sex: 'male'},
          {id: 4, name: 'D', sex: 'male'},
          {id: 5, name: 'E', sex: 'female'},
          {id: 6, name: 'F', sex: 'male'},
          {id: 7, name: 'G', sex: 'female'},
          {id: 8, name: 'H', sex: 'female'},
          {id: 9, name: 'I', sex: 'male'},
          {id: 10, name: 'J', sex: 'female'},
          {id: 12, name: 'K', sex: 'male'}
        ]
      }
    }
  }
});