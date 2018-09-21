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
        ]
      }
    }
  }
});