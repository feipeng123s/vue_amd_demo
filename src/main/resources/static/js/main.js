require.config(mergeRequireConfig({
  // baseUrl: '' //默认值为main.js所在目录
}));

// 引用element-ui样式
require(['css!lib/element-ui/theme-chalk/index.css']);
require(['css!assets/index.css']);
require(['./mock-config']);

require(['vue', './app/app', 'router', 'ELEMENT'],
  function (Vue, App, router, element) {
  Vue.use(element);

  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  });
});