// 封装一个axios的实例
import Axios from 'axios';
import { serverHost, port } from '../config';
// 创建一个新的实例
let r = Axios.create({
    baseURL: `${serverHost}:${port}/`
});

let request = function (url = '', options = {}) {
    return function () {
        if (url === '') return Promise.reject('必须传递url');
        // 将promise对象返回去
        return r({
            url,
            method: 'get', // method先给一个get请求
            ...options, // options中有method就会覆盖
        });

    }
}



export default request;