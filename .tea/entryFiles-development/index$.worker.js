if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

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

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../components/self-driving/self-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitpay/type-waitpay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/orderlistinfo/list-info/list-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/appoint/appoint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/journey/journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/finish/finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/cancel/cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitsend/type-waitsend?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitreceive/type-waitreceive?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitdispatch/type-waitdispatch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infocar/relet-infocar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infolist/relet-infolist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/modal/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
require('../../pages/index/index?hash=e882105491eca8c232fa5f4053fc7705bc5c9724');
require('../../pages/orderFormList/affirmList/affirmList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=966f3508be05009e7adfe4455bce55eaff428a09');
require('../../pages/myOrderList/myOrderList?hash=92851f8d06b9bd8bf241c57fca46aac95e8d3514');
require('../../pages/orderFormList/affirmWaitSend/affirmWaitSend?hash=547d67d4ea890cee9bb4f74743f33dac57088280');
require('../../pages/orderFormList/affirmWaitRec/affirmWaitRec?hash=3ab97443fd3ded5f7f41bdac547fe02b7a4d6a43');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/reletCar/reletCar/reletCar?hash=2b3099fdcd94e75ac860009aeb361d55ef30ea6a');
require('../../pages/reletCar/reletCarDeal/reletCarDeal?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}