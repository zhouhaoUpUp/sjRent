const BASE_URL = 'https://xxxxx.xxxxx.com.cn';// 请求的域名
module.exports = (url, method, data) => {
  return new Promise((resolve, reject) => {
    my.request({
      url: BASE_URL + url,
      method,
      data,
      // 这里是接收数据格式，看自己需求选择，一般JSON
      dataType: 'json',
      headers: { 'content-type': 'application/json' },//设置头部
      success: res => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.data.msg);
        }
      },
      fail: res => {
          reject('网络延迟，请稍后重试');
      }
    })       
  })
}