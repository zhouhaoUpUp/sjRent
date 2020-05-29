Component({
  mixins: [],
  data: {
    modalOpened:true,
     buttonss: [
      { text: '取消' ,extClass: 'buttonBold'},
      { text: '立即呼叫', extClass: 'buttonBold2' },
    ]
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onModalClick() {
    this.setData({
      modalOpened: false,
    });
 },
  },
});
