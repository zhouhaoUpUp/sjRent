Page({
  data: {
    hint:false,
    driverShow:false,

    order:[
      "个人用车","企业用车"
    ],
    orderIndex:0,
    driverData:""
  },
  onLoad() {
  },
  //提交的方法
  submit(){
    this.setData({
      hint:true
    })
    setTimeout(() => {
      this.setData({
      hint:false
    })
    }, 3000);
  },
//是否选择司机
driver(){
      this.setData({
      driverShow:true
    })
},
toCarryDriver(e){
        this.setData({
      driverShow:e.show
    })
},
//选择司机方法
toCarryDriverSuer(e){
  if(e.value[0]===0){
    this.setData({
      driverData:"是"
    })
  }else{
        this.setData({
      driverData:"否"
    })
  }
      this.setData({
      driverShow:e.show
    })
  console.log(e)
},
orderFN(e){
  console.log(e.target.dataset)
  this.setData({
    orderIndex:e.target.dataset.name.index
  })
}
});
