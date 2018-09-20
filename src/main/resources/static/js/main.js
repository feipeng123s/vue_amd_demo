require.config(mergeRequireConfig({
  // baseUrl: '' //默认值为main.js所在目录
}));

require(['vue', './app/app', 'router'], function (Vue, App, router) {

  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  });
});