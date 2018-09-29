define(function (require) {
  let template = require('text!./home.html');
  require('css!./home.css');
  let axios = require('axios');

  return {
    template: template,
    data () {
      return {
        menu: [],
        showPopper: false
      }
    },
    created () {
      let vm = this;
      axios.get('/menu/list').then(function (response) {
        vm.menu = response.data.menu;
      });
    },
    mounted () {
      let vm = this;
      let navUser = document.getElementById("dropdown_menu");
      let dropdownElm = document.getElementById('dropdown_element');

      navUser.addEventListener('mouseenter', vm.show);
      dropdownElm.addEventListener('mouseenter', vm.show);

      navUser.addEventListener('mouseleave', vm.hide);
      dropdownElm.addEventListener('mouseleave', vm.hide);
    },
    methods: {
      show: function () {
        this.showPopper = true
      },
      hide: function () {
        this.showPopper = false
      }
    }
  }
});