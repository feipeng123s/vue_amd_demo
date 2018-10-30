define(function (require) {
  let Vue = require('vue');
  let Router = require('vue-router');
  Vue.use(Router);

  let hello = require('./app/hello/hello');
  let login = require('./app/login/login');
  let home = require('./app/home/home');
  let main = require('./app/main/main');
  let userList = require('./app/user/list');

  return new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: home,
        children: [
          {
            path: '/',
            name: 'main',
            component: main
          },
          {
              path: '/main',
              name: 'main',
              component: main
          },
          {
            path: 'hello',
            name: 'hello',
            component: hello
          },
          {
            path: 'user',
            name: 'user',
            component: userList
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