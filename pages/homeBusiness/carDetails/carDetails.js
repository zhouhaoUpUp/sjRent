Page({
  data: {
    dateWeekPrice:[
      {
        date:"11月25日",
        week:"周一",
        price:"￥129"
      },{
        date:"11月25日",
        week:"周一",
        price:"￥129"
      },{
        date:"11月25日",
        week:"周一",
        price:"￥129"
      },{
        date:"11月25日",
        week:"周一",
        price:"￥129"
      },{
        date:"11月25日",
        week:"周一",
        price:"￥129"
      }
    ]
    ,carDetailsList:[
      "车辆详情",
      "评价列表",
      "费用说明"
    ],
    state:0

  },
  onLoad() {},
  checkPage(e){
    var Inde=e.target.dataset.id
        this.setData({
        state:Inde
      })
    if(Inde===0){

    }else if(Inde===1){

    }else{

    }
  }
});
