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
require('../../node_modules/mini-ali-ui/es/am-switch/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/self-driving/self-driving?hash=992c5cf70dd3c08bdb7b4834198ca9ae11f5f727');
require('../../components/home-page/whole-driving/whole-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/replace-driving/replace-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/replaceDriveNav/replaceDriveNav?hash=22e542341cdd20645a53b33a66358ae317526de6');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/mask/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/cost-detail/cost-detail?hash=dcc15e5016d0e8011f5754e593fdd5b04fbc70af');
require('../../components/ordertypes/type-waitpay/type-waitpay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/orderlistinfo/list-info/list-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/select-car-class/select-car-class?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-seating/select-seating?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-supplier/select-supplier?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-sort/select-sort?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-site-time/select-site-time?hash=bb86f1012f767a36b9f5aef51cfd55ea19c69eda');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/appoint/appoint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/journey/journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/finish/finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/cancel/cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitdispatch/type-waitdispatch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/car-details-home/car-details-home?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/comment-list/comment-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/cherge-explain/cherge-explain?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitsend/type-waitsend?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitreceive/type-waitreceive?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infocar/relet-infocar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infolist/relet-infolist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/modal/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
require('../../components/reletcar/reletcar-type/reletcar-type?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infoself/relet-infoself?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-info/earlycar-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/role/role?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-infolist/earlycar-infolist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-infosuc/earlycar-infosuc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/camera/camera?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-sendcar/type-sendcar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-journey/type-journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-finish/type-finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-cancel/type-cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/alphabet/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/search-bar/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/multi-liner/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/hint/hint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/carry-driver/carry-driver?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=bdda016308deaf0b4f6d56780588da2480525e25');
require('../../pages/orderFormList/affirmList/affirmList?hash=e18c52541a51ef0274aa3dfc816cad5ff5f2a58c');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=966f3508be05009e7adfe4455bce55eaff428a09');
require('../../pages/homeBusiness/carList/carList?hash=ec8410d6e8fa9c1e0bd48fc0631adc90db1ae28c');
require('../../pages/myOrderList/myOrderList?hash=92851f8d06b9bd8bf241c57fca46aac95e8d3514');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/homeBusiness/rentCarCompany/rentCarCompany?hash=1aa45490cbd8ec39bba04d3010e092055866fffb');
require('../../pages/homeBusiness/carDetails/carDetails?hash=9ccd125d50f29cb219b73425ab6a739c03fa0d46');
require('../../pages/homeBusiness/addContacts/addContacts?hash=890ed9b8c0c98a185f739c1ae592e7b8dbb4dcbf');
require('../../pages/payment/paymentSuccess/paymentSuccess?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/payment/paymentFailure/paymentFailure?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/selectSection/selectSection?hash=791edbeef8bb088497e02ebe194387edf446e37c');
require('../../pages/orderFormList/affirmWaitSend/affirmWaitSend?hash=547d67d4ea890cee9bb4f74743f33dac57088280');
require('../../pages/orderFormList/affirmWaitRec/affirmWaitRec?hash=3ab97443fd3ded5f7f41bdac547fe02b7a4d6a43');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/reletCar/reletCar/reletCar?hash=2b3099fdcd94e75ac860009aeb361d55ef30ea6a');
require('../../pages/reletCar/reletCarDeal/reletCarDeal?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarSuccess/reletCarSuccess?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarDefeat/reletCarDefeat?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarWaitPay/reletCarWaitPay?hash=b6e976a7d44a9b0496d5ccc83c192eb9280bcc73');
require('../../pages/reletCar/reletCarWaitAudit/reletCarWaitAudit?hash=b6e976a7d44a9b0496d5ccc83c192eb9280bcc73');
require('../../pages/homeBusiness/rentCarPerson/rentCarPerson?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/addSite/addSite?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/earlyCar/earlyCar/earlyCar?hash=5d696d2eb81c668aa9aa1fcbfe2fe3cf244fb436');
require('../../pages/earlyCar/earlyCarDeal/earlyCarDeal?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarSuccess/earlyCarSuccess?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarRefund/earlyCarRefund?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarDefeat/earlyCarDefeat?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarRefundSuc/earlyCarRefundSuc?hash=ff3a76c28ae57fa047584fe44f973c0f6c97a77d');
require('../../pages/personCenter/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personCenter/personalInfo/personalInfo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personCenter/driveLicense/driveLicense?hash=b194c6b20da654761269955295153aa84d64d090');
require('../../pages/orderFormList/affirmSendCar/affirmSendCar?hash=3937ef9de4bf66ae90fe65db23a35b293ce439ef');
require('../../pages/orderFormList/affirmJourney/affirmJourney?hash=8e378adc230fb875883e8707dda4d2dd9aea785e');
require('../../pages/orderFormList/affirmFinish/affirmFinish?hash=c0322e9351956ec43520c25b7d30dc330c3ee5bd');
require('../../pages/orderFormList/affirmCancel/affirmCancel?hash=ba7007541e62dcf11b1a08cde1100fb91209a5d7');
require('../../pages/homeBusiness/cityList/cityList?hash=963f16cb7463320db3c44c5d9793ede621920b36');
require('../../pages/longRent/submitDemand/submitDemand?hash=a8bfa2dccfb8a503c23b747651a9326a28bcae60');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}