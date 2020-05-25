Component({
  mixins: [],
  data: {
    timeMin:"",
    timeSec:"",
    types:"",
    imgSrc:""
  },
  props: {
    typeArr:{
      type:"object"
    }
  },
  didMount() {
    // console.log(this.props.typeArr)
    this.setData({
      types : this.props.typeArr.type,
      imgSrc : this.props.typeArr.imgSrc
    })

  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
