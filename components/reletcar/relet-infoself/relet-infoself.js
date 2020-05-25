Component({
  mixins: [],
  data: {
     //  自驾租车数据
     orderType:"行程中",
     useTime:"3月27日 周五 10:00",
     countTime:"3月27日 周五 10:00",
  
    //预定信息数据
    orderName:"张三",  //订车人名字
    orderPhone:"111111111111", //订车人电话
    useName:"张三",//用车人名字
    usePhone:"111111111111",//用车人电话

    //订单信息数据        
    orderTotal:"660.00",//订单合计
    rentMoney:"660.00",//租金费用
    safeguard:"440.00",//基本保障费用
    services:"440.00",//平台手续费
    estate:"440.00",//人身财产保险

    //服务信息数据
    serveComp:"成都国信租车有限公司", //服务公司
    shopSite:"成都市武侯区西部智谷",//门店地址
    bussiness:"08:00-20:00",//营业时间
    contactWay:"18871484170",//联系方式

    //其他信息数据
    orderListId:"11111111111111",//订单编号
    payment:"支付宝",//支付方式
    subTime:"2020-05-21 08:00",//提交时间
    payTime:"2020-05-21 08:00",//支付时间
    payment:"330.00"//支付金额
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
