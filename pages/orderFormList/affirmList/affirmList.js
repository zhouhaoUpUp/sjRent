Page({
  data: {
   "time" :"3月27日 周五 10：00",
   "adress" :"武青南路西部智谷D区",
   "timeRight":"2天",
   "carName":'大众新捷达', //车名
   "xiang":'三厢', //几厢
   "pailiang" :'自动1.5L', //排量
   "zuo":'5座' ,//几座车
   "day":'2天', //使用天数
   "year":'2013',//车年份
   "name":'唐雪林',//订车人姓名
   "phone":'1888888888',//订车人手机
   "money":'450', //支付价格
   detail:false
  },
  onLoad() {},
  showDetail(){
    this.setData({
      detail:true
    })
  },
  toShowDetail(e){
      this.setData({
      detail:e.show
    })
  },
  selectUseCarPeople(){
    my.navigateTo({
      url: '../../homeBusiness/addContacts/addContacts'
    });
  }
});
