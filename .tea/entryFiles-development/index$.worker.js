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
require('../../node_modules/mini-ali-ui/es/am-switch/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/self-driving/self-driving?hash=992c5cf70dd3c08bdb7b4834198ca9ae11f5f727');
require('../../components/home-page/replace-driving/replace-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/whole-driving/whole-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/mask/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/cost-detail/cost-detail?hash=dcc15e5016d0e8011f5754e593fdd5b04fbc70af');
require('../../components/ordertypes/type-waitpay/type-waitpay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/orderlistinfo/list-info/list-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/select-site-time/select-site-time?hash=bb86f1012f767a36b9f5aef51cfd55ea19c69eda');
require('../../components/homeBusinessCpt/select-car-class/select-car-class?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-seating/select-seating?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-supplier/select-supplier?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-sort/select-sort?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/listtypes/appoint/appoint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/journey/journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/finish/finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/cancel/cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitdispatch/type-waitdispatch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/car-details-home/car-details-home?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/comment-list/comment-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/cherge-explain/cherge-explain?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=2868d44f1894ea13d73653fb04cd0d07b979f4df');
require('../../pages/orderFormList/affirmList/affirmList?hash=25e170647f9c4d8a9817433fe988ff3f89b98585');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=966f3508be05009e7adfe4455bce55eaff428a09');
require('../../pages/homeBusiness/carList/carList?hash=32ccd4285ae3fd7200b7ec8c2045e860c0ce0163');
require('../../pages/myOrderList/myOrderList?hash=92851f8d06b9bd8bf241c57fca46aac95e8d3514');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/homeBusiness/rentCarCompany/rentCarCompany?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/carDetails/carDetails?hash=9ccd125d50f29cb219b73425ab6a739c03fa0d46');
require('../../pages/homeBusiness/addContacts/addContacts?hash=890ed9b8c0c98a185f739c1ae592e7b8dbb4dcbf');
require('../../pages/payment/paymentSuccess/paymentSuccess?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/payment/paymentFailure/paymentFailure?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/selectSection/selectSection?hash=4df84cdaee15a3240efe6486f5e1a71165061f75');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}