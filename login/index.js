
// import api from '../api/login.js'
export default {
  login() {
      Promise.all([this.getAuthCode(), this.getAccessToken(),this.getSystemInfo()])
            .then((results) => {
              console.log(results[0],results[1].data,results[2])
              let params = {
                accessToken:results[1].data,
                code : results[0],
                deviceNo:results[2]
              }
              this.getToken(params)
            })
      this.getAuthCode() 
  },
  
// 获取token并存储在缓存中
  getToken(params){
       dd.httpRequest({
         url:'http://192.168.8.176:20500/user/dingTalk/auth/login',
         method:'post',
         data:params,
         success :(res)=>{
           console.log(res.data.data.token)
           dd.setStorage({
             key: 'token',
             data:{
               token:res.data.data.token
             },
             success:function(){
               console.log('token保存成功')
             }
           })
         }
       })
  },
  //  获取authcode
  getAuthCode(){
    let p = new Promise((resolve, reject) => {
      // console.log('获取authcode')
      dd.getAuthCode({
        success: (res) => {
          console.log(res)
          resolve(res.authCode)
        }
      });
    })
    return p;
  },
  // 获取设备号
  getSystemInfo() {
    let p = new Promise((resolve, reject) => {
      // console.log('获取设备号')
      dd.getSystemInfo({
        success: (res) => {
          let deviceNo = res.model + ',' + res.brand + ',' + res.system + ',' + res.version
          resolve(deviceNo)
        }
      });
    })
    return p;
  },
  // 获取accessToken

  getAccessToken() {
    let p = new Promise((resolve, reject) => {
      // console.log('获取accessToken')
      dd.httpRequest({
        url: 'http://192.168.8.176:20500/auth/dingTalk/accessToken',
        success: function (res) {
          // console.log(res)
          resolve(res.data);
        }
      })
    })
    return p;
  },

}
