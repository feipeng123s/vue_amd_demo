define(function (require) {
    let axios = require('axios');
    let http = axios.create({});

    // 请求计数器，用来处理多个请求时loading显示问题
    let count = 0;

    // 请求拦截器
    http.interceptors.request.use(config => {
        if (count === 0) {
            // TODO: show loading component
        }
        count++;

        return config;
    },error => {
        return Promise.reject(error);
    });

    // 响应拦截器
    http.interceptors.response.use(response => {
        if (count > 0) {
            count--;
            if (count === 0) {
                // TODO: hide loading component
            }
        }

        return response;
    },error => {
        return Promise.reject(error);
    });

    return http;
});