Component({
  mixins: [],
  data: {
    whole:false
  },
  props: {
    sendData:{
      type:"string"
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    half(){
      this.setData({
        whole:!whole
      })
      this.props.onWhole({replace:this.data.whole})
    }
  },
});
