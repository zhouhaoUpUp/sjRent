Page({
  data: {
    appointype:true,  //预约订单组件显示隐藏
    canceltype:true,//取消订单组件显示隐藏
    finishtype:true,//完成订单组件显示隐藏
    journeytype:true,//行程中订单组件显示隐藏
    // 头部tabs分类
    tabs2: [
      {
        title: '全部',
      showBadge: false,
      },
      {
        title: '预约中',
       showBadge: false,
      },
      {
        title: '行程中',
        showBadge: false,
      },
      {
        title: '已完成',
        showBadge: false,
      },
      {
        title: '已取消',
        showBadge: false,
      }
    ],
    activeTab2: 0,
  },
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
    switch(index){
      case 0 :
         this.setData({
          [tabsName]: index,
          canceltype : true,
          finishtype : true,
          journeytype :true,
          appointype :true
          })
        ;break;
      case 1:
       this.setData({
          [tabsName]: index,
          canceltype : false,
          finishtype : false,
          journeytype :false,
          appointype :true
          })
        ;break;
        case 2:
       this.setData({
          [tabsName]: index,
          canceltype : false,
          finishtype : false,
          journeytype :true,
          appointype :false
          })
        ;break;
        case 3:
       this.setData({
          [tabsName]: index,
          canceltype : false,
          finishtype : true,
          journeytype :false,
          appointype :false
          })
        ;break;
        case 4:
        this.setData({
          [tabsName]: index,
          canceltype : true,
          finishtype : false,
          journeytype :false,
          appointype :false
          })
        ;break;
    }
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
     console.log(index,tabsName)
  },
  onLoad() {

  },
});
