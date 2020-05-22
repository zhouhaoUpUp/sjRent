Component({
  mixins: [],
  data: {
    // 订单信息数据
    listStatus:"自驾租车",  //订单类型
    listNum:"111111111111111", //订单编号
    startTime:"3月27日 周五 10:00", //用车时间起始
    endTime:"3月27日 周五 10:00",  //用车时间结束
    includeTime:"每天包含8小时 X16天",//包含时长
    useAddress:"成都市武侯区簇锦街道西部智谷D区", //用车地点
    returnAddress:"成都市武侯区簇锦街道西部智谷D区", //还车地点
    listMoney:"400.00", //订单金额
    applyTime:"3月27日 周五 10:00", //申请时间

    imgSrc:"", //图片路径
  },
  props: {
    imgTypeSrc:{
      type:"string"
    }
  },
  didMount() {
   this.setData({
     imgSrc:this.props.imgTypeSrc,
   })
   console.log(this.data.imgSrc)
   if(this.data.imgSrc){
        
   }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {

  },
});
