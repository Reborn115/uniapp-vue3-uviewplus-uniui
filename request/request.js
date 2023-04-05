const utils = require("../utils/util.js");

var app = getApp();

// 请求方式（定义完了又好像觉得没啥用，放着吧）
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const FORM = "FORM";
const DELETE = "DELETE";

// 系统域名
const baseURL = "https://www.mools.net";

/**
 * @name: 用户请求方法，使用promise实现
 * @author: camellia
 * @date: 2021-11-08
 * @param {*} method 请求方式
 * @param {*} url 请求连接
 * @param {*} data 请求数据
 */
const request = (method, url, data) => {
  return new Promise(function (resolve, reject) {
    let header = {
      "content-type": "application/json",
    };
    var requestData = data;
    if (method == "POST") {
      requestData = JSON.stringify(data);
    }
    // 展示loading效果
    // utils.showLoading("加载中……");
    // resolve 进success reject 进fail
    wx.request({
      url: baseURL + url,
      method: method,
      data: requestData,
      header: header,
      success(result) {
        // console.log(result);
        //请求成功
        //判断状态码---errCode状态根据后端定义来判断
        if (result.data.code > 0) {
          // 返回值正常
          resolve(result);
          // 关闭loading效果
          // utils.hideLoading();
        } else if (result.data.code == -200) {
          // 系统错误
          utils.showToast(result.data.msg);
          return;
        } else if (result.data.code == -201) {
          // 登录失效
          app.userLogin();
        } else {
          // 其他异常
          resolve(result);
        }
      },
      fail(result) {
        //请求失败
        utils.hideLoading();
        resolve(result);
      },
      complete: () => {
        setTimeout(() => {
          // 关闭loading效果
          utils.hideLoading();
        }, 100);
      },
    });
  });
};

/**
 * @name: 上传文件，使用promise实现
 * @author: camellia
 * @date: 2021-11-23
 * @param {*} url 请求连接
 * @param {*} filePath 微信临时文件链接(数据流)
 * @param {*} sign 请求加密字符串
 * @param {*} params 加密参数
 */
const upload = (url, filePath, sign, params) => {
  return new Promise((resolve) => {
    wx.uploadFile({
      url: baseURL + url,
      filePath: filePath,
      formData: {
        sign: JSON.stringify(sign),
        params: JSON.stringify(params),
      },
      name: "file",
      success(res) {
        resolve(JSON.parse(res.data));
      },
    });
  });
};

/**
 * POST请求:(暂时没用上)
 * URL：接口
 * postData：参数，json类型
 * doSuccess：成功的回调函数
 * doFail：失败的回调函数
 */
const postData = (url, postData, doSuccess, doFail) => {
  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + url,
    // 这个header根据你的实际改！
    header: {
      "Content-Type": "application/json",
      cookie: config.httpToken,
      "Request-Origin": "app",
    },
    data: postData,
    method: "POST",
    success: function (res) {
      //参数值为res.data,直接将返回的数据传入
      if (res.data.result.token) {
        // 如果有token保存下来，下次请求带着token访问
        config.httpToken = res.data.result.token;
        // console.log("token--> ", config.httpToken);
      }
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
  });
};

/**
 * GET请求:(暂时没用上)
 * URL：接口
 * getData：参数，json类型
 * doSuccess：成功的回调函数
 * doFail：失败的回调函数
 */
const getData = (url, getData, doSuccess, doFail) => {
  wx.request({
    url: host + url,
    header: {
      "Content-Type": "application/json",
      "X-Access-Token": config.httpToken,
      "Request-Origin": "app",
    },
    method: "GET",
    data: getData,
    success: function (res) {
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
  });
};

module.exports = {
  request,
  upload,
  baseURL: baseURL,
};
