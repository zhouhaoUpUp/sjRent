// 获取缓存token值

module.exports = ()=> {
  return new Promise((resolve, reject) => {
      dd.getStorage({
      key: 'token',
      success: function(res) {
        console.log('token',res)
        resolve(res)
      },
      fail: function(res){
       console.log('token获取失败')
      }
    });
  })
}