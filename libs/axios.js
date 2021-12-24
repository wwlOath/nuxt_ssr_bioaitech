import { Message } from 'view-design';
import config from '@/plugins/config';
import Cookies from 'js-cookie';

export default function ({ store, redirect, app: { $axios } }) {
  // 后端接口地址
  $axios.defaults.baseURL = config.baseUrl;

  // Request拦截器：设置Token
  $axios.onRequest((config) => {
    // TODO 使用Vuex存储Token，并做持久化处理
    // config.headers.common['X-Token'] = store.state.token
  })
  // Error拦截器：出现错误的时候被调用，根据状态码做对应判断并显示全局Message
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.code)
    switch (code) {
      // 未登录
      case 5000:
        Cookies.set('userInfo', '');
        redirect('/login');
        break
      default:
        break
    }
    //message模块显示异常信息
    Message.error(error.response.data.message)
  })
  // Response拦截器：对正常返回的数据进行处理
  $axios.onResponse((response) => {
    return response.data
  })
}

