Component({
  mixins: [],
  data: {
    carClass:[
      {
        className:"经济型",
        classId:1
    },{
className:"商务型",
        classId:2
    },{
className:"越野型",
        classId:3
    },{
className:"舒适型",
        classId:4
    },{
className:"豪华型",
        classId:5
    },{
className:"新能源",
        classId:6
    },{
className:"皮卡",
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
