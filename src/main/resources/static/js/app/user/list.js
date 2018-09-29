define(function (require) {
  let template = require('text!./list.html');
  require('css!./list.css');
  let axios = require('axios');

  return {
    template: template,
    data () {
      return {
        users: []
      }
    },
    created () {
      let vm = this;
      axios.get('/user/list').then(function (response) {
        vm.users = response.data.users;
      });
    }
  }
});