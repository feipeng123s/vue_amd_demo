const URL_LIB = 'lib/';

var baseConfig = {
  paths: {
    'text': URL_LIB + 'require/text',
    'css': URL_LIB + 'require/css.min',
    'vue': URL_LIB + 'vue/vue.min',
    'vue-router': URL_LIB + 'vue/vue-router.min',
    'ELEMENT': URL_LIB + 'element-ui/index',
    'mock': URL_LIB + 'mock-min',
    'axios': URL_LIB + 'axios.min',
    'qs': URL_LIB + 'qs',
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
};

/**
 * Polyfill
 * from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
 */
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign (target, varArgs) {
      'use strict'
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];

        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true,
    enumerable: false
  });
}

window.mergeRequireConfig = function (config) {
  config = config || {};
  return Object.assign(baseConfig, config);
};