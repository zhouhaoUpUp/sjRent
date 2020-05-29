const tokens = require('./token.js')
const BASE_URL = 'http://192.168.8.176:20500';// 请求的域名



module.exports = (url,method,data) => {
  return new Promise((resolve, reject) => {
    tokens().then((res)=>{
      console.log(res.data.token)
                  dd.httpRequest({
                    url:BASE_URL+url,
                    method : method,
                    data : data,
                    // 这里是接收数据格式，看自己需求选择，一般JSON
                    dataType: 'json',
                    headers: {
                    'content-type' :'application/x-www-form-urlencoded',
                    'token':res.data.token
                    },//设置头部
                    success: res => {
                      if (res.status === 200) {
                        resolve(res);
                      } else {
                        reject(res.data.msg);
                      }
                    },
                    fail: res => {
                        reject(res);
                    }
                 })  
        })
      
  })
}