
Page({
  data(){
    return {
      headList:[
        {name:"自驾短租"},{name:"带驾包车"},{name:"长租"}],
      selectType:0,
      self:true,
      replace:false
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  selectOperation(e){
    this.setData({
      selectType:e.target.dataset.id
    })
     this.selectType=e.target.dataset.id
    console.log(e.target.dataset.id)
    if(e.target.dataset.id===0){
      this.setData({
        self:true,
        replace:false
      })
    }else if(e.target.dataset.id===1){
            this.setData({
        self:false,
        replace:true
      })
    }else{

    }
  },
});
