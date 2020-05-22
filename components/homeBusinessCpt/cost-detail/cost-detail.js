Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    show(){
      this.props.onShowDetail({show:false})
    }
  },
});
