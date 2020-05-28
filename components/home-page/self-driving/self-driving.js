Component({
  mixins: [], // minxin 方便复用代码
  data: { 
    x: 1 ,
    show:false,
    stateUseCarImage:"../../assets/home/Home_Selection_N2x.png"
  }, // 组件内部数据
  props: { 
        sendData:{
      type:"string"
    }
  }, // 可给外部传入的属性添加默认值
  didMount(){
     console.log(1111111111,this.props.sendData)
  }, // 生命周期函数
  didUpdate(){},
  didUnmount(){},
  methods: {   // 自定义方法
    handleTap() {
  	  this.setData({ x: this.data.x + 1}); // 可使用 setData 改变内部属性
    }, 
     switch1Change(e) {
       this.setData({
         show:e.detail.value
       })
    },
    goCarList(e){
      if(this.data.stateUseCarImage==="../../assets/home/Home_Selection_N2x.png"){
            my.navigateTo({
        url: '../../../pages/homeBusiness/carList/carList'
      });
      }else{
        my.navigateTo({
          url:'../../../pages/homeBusiness/selectSection/selectSection'
        })
      }

    },
    stateUseCar(){
      if(this.data.stateUseCarImage==="../../assets/home/Home_Selection_N2x.png"){
              this.setData({
        stateUseCarImage:"../../assets/home/Home_Selection2x.png"
      })
        // my.navigateTo({
        //   url:""
        // })
      }else{
              this.setData({
        stateUseCarImage:"../../assets/home/Home_Selection_N2x.png"
      })
      }

    }
  },
})


