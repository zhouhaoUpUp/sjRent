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
    state:0,
    carDetails:true,
    commentList:false,
    chergeExplain:false,
    detail:false
  },
  onLoad() {},
  checkPage(e){
    var Inde=e.target.dataset.id
        this.setData({
        state:Inde
      })
    if(Inde===0){
      this.setData({
        carDetails:true,
        commentList:false,
        chergeExplain:false      
        })
    }else if(Inde===1){
              this.setData({
        carDetails:false,
        commentList:true,
        chergeExplain:false      
        })
    }else{
            this.setData({
        carDetails:false,
        commentList:false,
        chergeExplain:true      
        })
    }
  },
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
  nextPage(){
    my.navigateTo({
      url: '../../orderFormList/affirmList/affirmList'
    });
  }
  
});
