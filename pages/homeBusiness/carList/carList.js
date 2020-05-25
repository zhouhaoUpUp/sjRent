Page({
  data: {
    signTab:["5座","汽油","自动排挡","提前48小时免费取消"],
    carClassState:false,
    seatAmountState:false,
    supplyState:false,
    filtrSteta:false
  },
  onLoad() {},
  //组件点击显示的方法
  carClassPopUp(){
    this.setData({
      carClassState:true
    })
  },
  seatAmount(){
    this.setData({
      seatAmountState:true
    })
  },
  supply(){
    this.setData({
      supplyState:true
    })
  },
  filtr(){
    this.setData({
      filtrSteta:true
    })
  },
  // 组件点击隐藏的方法
  toCarClassShow(e){
    console.log(e.show)
        this.setData({
      carClassState:e.show
    })
  },
  toSeatingShow(e){
    this.setData({
      seatAmountState:e.show
    })
  },
  toSupplier(e){
    this.setData({
      supplyState:e.show
    })
  },
  toSort(e){
    this.setData({
      filtrSteta:e.show
    })
  },
  
  nextPage(){
    my.navigateTo({
      url: '../rentCarCompany/rentCarCompany'
    });
  }
});