const app =getApp();
export default {
  //个人中心
  userCenter (){
    return app.myRequest("/user/center",'get')
  }
}