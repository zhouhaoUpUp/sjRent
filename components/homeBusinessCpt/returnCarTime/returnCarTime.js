Component({
  mixins: [],
  data: {
    timeData: [],
    selectTakeReturnData: 1
  },
  props: {},
  didMount() {

  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
      this.setData({
        value: e.detail.value,
      });
    },
    takeCarFN() {
      this.setData({
        selectTakeReturnData: 1
      })
    },
    returnCarFN() {
      this.setData({
        selectTakeReturnData: 2
      })
    }
  },
});
