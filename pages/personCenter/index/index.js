const api = require('../../../api/personcenter.js')
Page({
  data: {
    name:"王长江",  //用户名
    attestType:"未认证" //认证状态
  },
  onLoad() {
    my.setNavigationBar({
      backgroundColor:'#FBC32B'
    })

    api.userCenter()
    .then((res)=>{
      console.log(res.data.data)
    })
  }

});
