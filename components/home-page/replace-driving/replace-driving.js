Component({
  mixins: [],
  data: {
    halfDay:true
  },
  props: {
      sendData:{
        type:"string"
      }
  },
  didMount() {
   
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    whole(){
      this.setData({
        halfDay:false
      })
      this.props.onTaskDetail({replace:this.data.halfDay})
    },
  },
});
