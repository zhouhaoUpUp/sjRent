Component({
  mixins: [],
  data: {
    banrizu:true
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    whole(){
      this.setData({
        banrizu:false
      })
    }
  },
});
