import myRequests from './utils/request.js'
import login from './login/index.js'
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    login.login()
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
 myRequest:myRequests
});
