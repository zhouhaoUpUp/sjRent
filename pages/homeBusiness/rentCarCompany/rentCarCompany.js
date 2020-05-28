Page({
  data: {
        selectTime:false,
  },
  onLoad() {},
  nextPage(){
    my.navigateTo({
      url: '../carDetails/carDetails'
    });
  },
  // 组件显示的方法
    selectTimeFN(){
    this.setData({
      selectTime:true
    })
  },
    // 组件隐藏的方法
  toSelectTime(e){
    this.setData({
      selectTime:e.show
    })
  }
});
