define(function (require) {
  let template = require('text!./home.html');
  require('css!./home.css');

  return {
    template: template,
    data () {
      return {
        menu: [
          {
            label: 'Hello',
            href: '/hello'
          },
          {
            label: '用户管理',
            href: '/user'
          },
          {
            label: 'menu3',
            href: '/hello'
          },
          {
            label: 'menu4',
            href: '/hello'
          }
        ],
        showPopper: false
      }
    },
    mounted () {
      let vm = this
      let navUser = document.getElementById("dropdown_menu")
      let dropdownElm = document.getElementById('dropdown_element')

      navUser.addEventListener('mouseenter', vm.show)
      dropdownElm.addEventListener('mouseenter', vm.show)
      navUser.addEventListener('mouseleave', vm.hide)
      dropdownElm.addEventListener('mouseleave', vm.hide)
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