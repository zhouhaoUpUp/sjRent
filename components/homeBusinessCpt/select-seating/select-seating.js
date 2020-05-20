Component({
  mixins: [],
  data: {
    carClass:[
      {
        className:"2座",
        classId:1
    },{
className:"3座",
        classId:2
    },{
className:"4座",
        classId:3
    },{
className:"5座",
        classId:4
    },{
className:"6座",
        classId:5
    },{
className:"7座",
        classId:6
    },{
className:"7座以上",
        classId:7
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
      }
  },
});
