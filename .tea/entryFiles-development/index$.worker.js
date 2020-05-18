if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/ordertypes/type-waitpay/type-waitpay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../pages/orderFormList/affirmList/affirmList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=1cfce0a3ea53fa9363003158bea9459ab7376841');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}