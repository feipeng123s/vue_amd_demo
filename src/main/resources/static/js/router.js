define(function (require) {
  let Vue = require('vue');
  let Router = require('vue-router');
  Vue.use(Router);

  let hello = require('./app/hello/hello');
  let login = require('./app/login/login');
  let home = require('./app/home/home');

  return new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
        children: [
          {
            path: 'hello',
            name: 'hello',
            component: hello
          }
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: login
      }
    ]
  });
});