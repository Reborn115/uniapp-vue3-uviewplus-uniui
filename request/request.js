const BASE_URL = "https://cs.api.yuleng.top";

const request = (url, method, data, header = {},requestType) => {
  return new Promise((resolve, reject) => {    
    if ( url != "/api/login/b") {
      if (!uni.getStorageSync("token")) {
        uni.navigateTo({
          url: "/pages/login/login",
        });
      }
    }
    uni.request({
      url: !requestType ? BASE_URL + url : url,
      method: method,
      data: data,
      header: Object.assign(
        {
          "Content-Type": "application/json", // 默认请求头
          Authorization: "Bearer " + uni.getStorageSync("token")
        },
        header
      ),
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(new Error("请求失败"));
        }
      },
      fail: (err) => {
        console.log(err);
        reject(err);
      },
    });
  });
};

// 请求拦截器
/* uni.request.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，比如加上 token
    // config.header.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
uni.request.interceptors.response.use(
  (response) => {
    // 在响应数据之前做一些处理
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

export default request;
