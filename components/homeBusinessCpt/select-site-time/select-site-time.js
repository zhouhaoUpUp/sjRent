Component({
  mixins: [],
  data: {
    type: 'market',
    maskZindex: 10,
    bgShow:false,
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
             this.setData({
        bgShow:false
       })
    }
  },
});
