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
require('../../components/self-driving/self-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=e882105491eca8c232fa5f4053fc7705bc5c9724');
require('../../pages/orderFormList/affirmList/affirmList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}