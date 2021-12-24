import config from "@/plugins/config";
import qs from 'qs';

export default function ({ app, $axios, redirect }) {
  const API = {};
  API.newReleaseList = function (params) {
    return $axios({
      url: config.baseUrl+'/unauth/tissuechip/newList',
      method: 'get',
      data: params,
    })
  };

  API.hotDealsList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/hotList`,
      method: 'get',
      params: data,
    })
  };

  API.latestOffersList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/promotioninfo/list`,
      method: 'get',
      params: data,
    })
  };

  API.autoComplateQuery = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/autoComplateQuery`,
      method: 'post',
      params: data,
    })
  };

  //查询组织芯片阵列分型列表
  API.queryArrayTypingList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/arraytyping/list`,
      method: 'get',
      params: data,
    })
  };

  //查询组织芯片组织器官列表,组织库组织类型列表
  API.queryTissueOrganList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/category/findChipCategory`,
      method: 'get',
      params: data,
    })
  };

  //组织芯片取样方式列表
  API.querySampleMethodsList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/SamplingMethods`,
      method: 'get',
      params: data,
    })
  };

  //组织芯片列表
  API.searchTissueOrganList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/list`,
      method: 'post',
      params: data,
    })
  };

  //组织库组织器官列表
  API.queryOrganizationOrganList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuesection/tissuesOrgans`,
      method: 'get',
      params: data,
    })
  };

  //组织库搜索条件列表
  API.searchOrganizationList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuesection/list`,
      method: 'post',
      params: data,
    })
  };

  //组织芯片详情页接口
  API.queryTissueOrganDetailList = function (id, data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/info/${id}`,
      method: 'get',
      params: data,
    })
  };

  //重复病历列表接口
  API.queryRepeatChipList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/searchAllChipId`,
      method: 'get',
      params: data,
    })
  };

  //对比重复病历接口
  API.compareRepeatChipList = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/comparativeRepeatRecord`,
      method: 'post',
      params: data,
    })
  };

  //下载说明书接口
  API.downloadInstructionManualFile = function (id, data) {
    return $axios({
      url: config.baseUrl+`/unauth/tissuechip/downloadManual/${id}`,
      method: 'get',
      params: data,
      responseType: 'blob',
    })
  };

  //加入购物车接口
  API.addShoppingCartList = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/shoppingcart/addToShoppingCart`,
      method: 'post',
      params: data,
    /*  headers: {
        'token': Authorization
      }*/
    })
  };

  //登录接口
  API.loginInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/login`,
      method: 'post',
      params: data,
    })
  };

  //退出登录接口
  API.exitLoginInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/logout`,
      method: 'post',
      params: data,
    })
  };

  //查询用户信息接口
  API.queryUserMessage = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/getMyInfo`,
      method: 'get',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //注册用户接口
  API.registInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/register`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //修改个人信息接口
  API.modifyUserInfoMessage = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/editMyInfo`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //修改密码接口
  API.modifyUserPasswordInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/password`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //查询用户购物车列表
  API.modifyUserPasswordInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/shoppingcart/list`,
      method: 'get',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //修改用户购物车中商品数量
  API.modifyUserShoppingNumber = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/shoppingcart/editShoppingNum`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //删除购物车数据
  API.deleteShoppingCartDataOperate = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/shoppingcart/delete`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //购物车提交
  API.shoppingCartSubmitListIds = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/shoppingcart/getByIds`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //收货地址列表
  API.queryShippingAddressList = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/address/list`,
      method: 'get',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //添加地址
  API.queryShippingAddressList = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/address/save`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //修改地址
  API.modifyAddressInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/address/update`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //显示地址基本信息接口
  API.queryAddressMessage = function (id, data) {
    return $axios({
      url: config.baseUrl+`/auth/address/info/${id}`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //删除地址
  API.queryAddressMessage = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/address/delete`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //提交订单
  API.shoppingCartSubmitOrderData = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/order/submitOrder`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //查询历史订单
  API.queryHistoryOrderList = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/order/list`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //删除订单
  API.deleteSubmitOrderData = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/order/remove`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //联系我们接口
  API.contactUsInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/unauth/contactUs`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //订单详情接口
  API.orderDetailMessage = function (id, data) {
    return $axios({
      url: config.baseUrl+`/auth/order/info/${id}`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  //重置密码发送邮件接口
  API.sendEmailInterface = function (data) {
    return $axios.post(
      config['baseUrl']+`/auth/getVerificationCode`,
      qs.stringify(data, { indices: false }),
      /*  {headers: {
          'token': Authorization
        }}*/
    )
  };

  //重置密码接口
  API.resetPasswordInterface = function (data) {
    return $axios({
      url: config.baseUrl+`/auth/resetPassword`,
      method: 'post',
      params: data,
      /*  headers: {
          'token': Authorization
        }*/
    })
  };

  app.api = API;
  //inject('api',API);
}
