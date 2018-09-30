define(function (require) {
  let template = require('text!./login.html');
  require('css!./login.css');
  let axios = require('axios');
  let qs = require('qs');

  return {
    template: template,
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        let vm = this;
        axios.post('/user/login', qs.stringify({username: vm.username, password: vm.password}))
          .then(() => {
            alert('登录成功');
          })
          .catch(err => {
            // console.log(err);
            if (err.response && err.response.code === 401) {
              alert('登录失败');
            }
          })
      }
    }
  }
});