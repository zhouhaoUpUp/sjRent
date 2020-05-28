Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 获取滑动块的值
    onChange(e) {
    console.log(e.detail.value[0]);
    this.setData({
      value: e.detail.value,
    });
  },
  //取消的方法
  cancelFN(){
    this.props.onCarryDriver({show:false})
  },
  //确认的方法
  makeSureFN(){
     this.props.onCarryDriverSuer({show:false,value:this.data.value?this.data.value:[0]})
  }
  },
});
