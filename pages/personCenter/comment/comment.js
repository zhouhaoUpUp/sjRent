Page({
  data: {
    type:"代驾包车",
    carname:"大众新捷达",
    pailiang:"1.5L",
    money:"1265",
    btnIndex:-1,
    btnvalue:[
      {
        content:'性价比高',
        checked:false
      },
        {
        content:'熟悉路线',
        checked:false
      },  {
        content:'服务态度好',
        checked:false
      },
       
    ],
  //星星图片路径数组
    starArr:[
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png"
  ],
      starsArr:[
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png",
        "../../../assets/personcenter/starg.png"
  ]
  },
  onLoad() {},
  tap(e){
      for(let i=0;i<=4;i++){
      let star = "starArr["+ i +"]"
        this.setData({
         [star]:"../../../assets/personcenter/starg.png"
        })
    }
    // console.log(e.target.dataset.id)
    let index = e.target.dataset.id
    for(let i=0;i<=index;i++){
      let star = "starArr["+ i +"]"
        this.setData({
         [star]:"../../../assets/personcenter/stary.png"
        })
    }   
  },
  taps(e){
        for(let i=0;i<=4;i++){
      let star = "starsArr["+ i +"]"
        this.setData({
         [star]:"../../../assets/personcenter/starg.png"
        })
    }
    // console.log(e.target.dataset.id)
    let index = e.target.dataset.id
    for(let i=0;i<=index;i++){
      let star = "starsArr["+ i +"]"
        this.setData({
         [star]:"../../../assets/personcenter/stary.png"
        })
    }   
  },
  tappj(e){
    console.log(e.target.dataset.id)
    let i = e.target.dataset.id
    let btn = "btnvalue["+i+"].checked"
    if(this.data.btnvalue[i].checked){
         this.setData({
        [btn]:false
    })
    }
    else{
      this.setData({
        [btn]:true
    })
    }
  }
});
