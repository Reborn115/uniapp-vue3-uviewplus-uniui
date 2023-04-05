// 引入请求方法
const request = require("./request.js").request;
// 上传
const upload = require("./request.js").upload;
/**
 * @name: 公共请求接口
 * @author: camellia
 * @date: 2021-11-15
 */
const API = {
  // 用户登录 / 注册
  userLogin: (data) => {
    return request("POST", `/xxxx/xxx/index.php/xxxx/userLogin`, data);
  },
  // 获取用户身份信息
  getUserInfoByUserid: (data) => {
    return request("POST", `/xxx/xxx/index.php/xxx/getUserInfoByUserid`, data);
  },
};
/**
 * @name: 导出
 * @author: camellia
 * @date: 2021-11-15
 */
module.exports = {
  API: API,
};
