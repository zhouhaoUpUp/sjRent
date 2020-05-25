Component({
  mixins: [],
  data: {
    replaceShow:true,
    wholeShow:false
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    half(){
      this.setData({
                replaceShow:true,
        wholeShow:false

      })
    },
    whole(){
        this.setData({
        replaceShow:false,
        wholeShow:true
      })
    }
  },
});
