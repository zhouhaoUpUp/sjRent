Component({
  mixins: [],
  data: {
    carClass:[
      {
        className:"世嘉租车",
        classId:1
    },{
className:"明轩酒店",
        classId:2
    },{
className:"且行租车",
        classId:3
    },{
className:"青春租车",
        classId:4
    },{
className:"亲亲出行",
        classId:5
    },{
className:"京南梦租车",
        classId:6
    },{
className:"美行尚盈",
        classId:7
    },{
className:"海友租车",
        classId:8
    }],
    option:-1
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
      selected(e){
            var id=e.target.dataset.id
          this.setData({
              option:id
          })

      },
      show(){
          this.props.onSupplier({show:false})
      }
  },
});
