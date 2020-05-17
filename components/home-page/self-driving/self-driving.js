Component({
  mixins: [], // minxin 方便复用代码
  data: { 
    x: 1 ,
    show:false
  }, // 组件内部数据
  props: { y: 1 }, // 可给外部传入的属性添加默认值
  didMount(){}, // 生命周期函数
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
      console.log('switch1 发生 change 事件，携带值为', e.detail.value);
    },
  },
})


