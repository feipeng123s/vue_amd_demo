({
  baseUrl: '.',
  name: "main",
  out: "dist/main-build.js",
  fileExclusionRegExp: /^(r|build)\.js$/,
  optimizeCss: 'standard',
  // removeCombined: true,
  paths: {
    'text': 'lib/require/text',
    'css': 'lib/require/css.min',
    'vue': 'lib/vue/vue.min',
    'vue-router': 'lib/vue/vue-router.min',
    'ELEMENT': 'lib/element-ui/index',
    'mock': 'lib/mock-min',
    'axios': 'lib/axios.min',
    'qs': 'lib/qs',
    'assets': '../assets'
  },
  // 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
  shim: {
    vue: {
      exports: 'Vue'
    },
    ELEMENT: {
      deps: ['vue']
    }
  }
})