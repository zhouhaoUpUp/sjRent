Component({
  mixins: [],
  data: {
    type: 'market',
    maskZindex: 10,
    bgShow:true,
    show:false
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
         switch1Change(e) {
       this.setData({
         show:e.detail.value
       })
      console.log('switch1 发生 change 事件，携带值为', e.detail.value);
    },
    selectCar(){
      console.log(111)
       this.props.onSelectTime({show:false})
    },
    switchChange(e){
        console.log(e.detail.value)
        this.setData({
          show:e.detail.value
        })
    }
  },
});
