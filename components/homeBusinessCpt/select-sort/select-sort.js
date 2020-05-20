Component({
  mixins: [],
  data: {
    carClass:[
      {
        className:"推荐",
        classId:1
    },{
className:"价格（由低到高）",
        classId:2
    },{
className:"价格（由高到低）",
        classId:3
    }],
    check:0
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
      selected(e){
            var id=e.target.dataset.id
          this.setData({
              check:id
          })

      }
  },
});
